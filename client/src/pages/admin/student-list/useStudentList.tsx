import { useState, useEffect, useCallback } from "react";
import UserService from "../../../auth/service/UserService";
import useUserState from "../../../auth/model/useUserState";
import { ListItem, UserData } from "../../../auth/model/authTypes";
import React from "react";
import {  toast } from 'sonner'
import { useDebounce } from "./Debounced";

const useStudentList = () => {
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const {
    user,
    editingUser,
    AddUser,
    setEditUser,
    setAddUser,
    handleInputChange,
    handleSelectChange,
    resetUser,
    handleInputEditChange,
  } = useUserState();
  const [citizenIdError, setCitizenIdError] = useState(false);
  const [pinIdError, setPinIdError] = useState(false);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [image, setImage] = React.useState<File | null>(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const markItemAsUpdated = (itemId: string) => {
    setListItems((prevListItems) =>
      prevListItems.map((item) =>
        item.id === itemId ? { ...item, updated: true } : item
      )
    );
  };

  const handleSearch = useCallback(async (term: string) => {
    if (term.trim() !== "") {
      const searchData = await UserService.searchUsers(term);
      setListItems(searchData);
    } else {
      fetchUserList();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    handleSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, handleSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const fetchUserList = useCallback(async () => {
    const response = await UserService.getAllUsers({
      page,
      pageSize: rowsPerPage,
    });
    setListItems(response);
  }, [page, rowsPerPage]);

  useEffect(() => {
  }, [fetchUserList, handleSearch]);

  const handleAdd = () => {
    setAddDialogOpen(true);
    setAddUser({
      id: "",
      pin: "",
      citizen_id: "",
      firstname: "",
      lastname: "",
      account_type: "",
      user_img_path: "" || null,
      imageFileName:""

    }
    );
  };

  const handleEdit = (user: UserData) => {
    setEditUser(user);
    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setEditUser(initialUserState);
    setEditDialogOpen(false);
  };

  const handleEditConfirmed = async () => {
    if (editingUser) {
      const formData = new FormData();
      formData.append("pin", editingUser.pin);
      formData.append("citizen_id", editingUser.citizen_id);
      formData.append("firstname", editingUser.firstname);
      formData.append("lastname", editingUser.lastname);
  
      if (image) {
        // If image is provided, append it to the FormData
        formData.append("image", image as File);
      }
  
      try {
        const response = await UserService.updateUser(editingUser.id, formData);

        if (response.status === 200) {
            setEditUser(initialUserState);
        }
        toast.success("User updated successfully");

    } catch (error) {
        console.error("Error updating user:", error);
        toast.error("An error occurred while updating user");
    }

  
      markItemAsUpdated(editingUser.id);
      setEditDialogOpen(false);
      fetchUserList()
    }
  };

  const handleCloseAddDialog = () => {
    setAddDialogOpen(false);
    setAddUser({
      id: "",
      pin: "",
      citizen_id: "",
      firstname: "",
      lastname: "",
      account_type: "",
      user_img_path: "" || null,
      imageFileName:""

    }
    );
  };

  const handleAddConfirmed = async () => {
    const isValidPinId = AddUser.pin.trim() !== '';

    if (!isValidPinId) {
        setPinIdError(true);
        return;
    }
    setPinIdError(false);
    
    const isValidCitizenId = AddUser.citizen_id.trim() !== '' && AddUser.citizen_id.length === 13;

    if (!isValidCitizenId) {
        setCitizenIdError(true);
        return;
    }
    setCitizenIdError(false);



    const formData = new FormData();
    formData.append("pin", AddUser.pin);
    formData.append("citizen_id", AddUser.citizen_id);
    formData.append("firstname", AddUser.firstname);
    formData.append("lastname", AddUser.lastname);
    formData.append("account_type", AddUser.account_type);
    formData.append("image", image as File);
    console.log(formData);

    try {
      await UserService.addUser(formData);
      await fetchUserList();
      toast.success("User added successfully");
      setAddDialogOpen(false);
      setAddUser({
        id: "",
        pin: "",
        citizen_id: "",
        firstname: "",
        lastname: "",
        account_type: "",
        user_img_path: "" || null,
        imageFileName:""
      });
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("An error occurred while adding user");
    }
  };
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
  
    if (files && files.length > 0) {
      const selectedImage = files[0];
  
      const imageUrl = URL.createObjectURL(selectedImage);
  
      setImage(selectedImage);
      setAddUser((prevEditingUser) => ({
        ...prevEditingUser,
        user_img_path: imageUrl,
        imageFileName: selectedImage.name
      }));
    }
  };
  const handleEditImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
  
    if (files && files.length > 0) {
      const selectedImage = files[0];
  
      const imageUrl = URL.createObjectURL(selectedImage);
  
      setImage(selectedImage);
      setEditUser((prevEditingUser) => ({
        ...prevEditingUser,
        user_img_path: imageUrl,
        imageFileName: selectedImage.name
      }));
    }
  };
  
  

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedItems(selectAll ? [] : listItems.map((item) => item.id));
  };

  const handleCheckboxChange = (itemId: string) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(itemId)) {
        return prevSelected.filter((id) => id !== itemId);
      } else {
        return [...prevSelected, itemId];
      }
    });
  };

  const handleDelete = async (id: string) => {
    await fetchUserList();
    setItemToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirmed = async () => {
    try {
      if (itemToDelete !== null) {
        await UserService.deactivateUser(itemToDelete);
        const updatedList = listItems.filter(
          (item) => item.id !== itemToDelete
        );
        setListItems(updatedList);
        setItemToDelete(null);
      } else {
        await Promise.all(
          selectedItems.map(async (id) => {
            await UserService.deactivateUser(id);
          })
        );
        const updatedList = listItems.filter(
          (item) => !selectedItems.includes(item.id)
        );
        setListItems(updatedList);
        setSelectedItems([]);
      }
      await fetchUserList();
    } catch (error) {
      console.error("Error deactivating user(s):", error);
    } finally {
      setDeleteDialogOpen(false);
    }
  };

  const handleDeleteAll = () => {
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const handleChangePage = async (newPage: number) => {
    setPage(newPage);
    await fetchUserList();
  };

  const handleChangeRowsPerPage = async (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setPage(1);
    await fetchUserList();
  };
  

  const initialUserState: UserData = {
    id: "",
    pin: "",
    citizen_id: "",
    firstname: "",
    lastname: "",
    user_img_path: "" || null,
    imageFileName:""
  };
  const handleInputChangeCitizen = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const maxLength = 13;
  
    // ตรวจสอบว่าข้อมูลที่กรอกเป็นตัวเลขทั้งหมดหรือไม่
    const isValidCitizenId = /^\d+$/.test(value) && value.length <= maxLength;
  
    if (isValidCitizenId || value === '') {
      setCitizenIdError(!isValidCitizenId);
  
      setAddUser((prevUser) => ({
        ...prevUser,
        [name]: value,useEffect
      }));
    }
  };
  

  const handleInputChangePin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const isValidPinId = value.trim() !== '';
    setPinIdError(!isValidPinId);

    setAddUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  return {
    listItems,
    selectAll,
    selectedItems,
    page,
    rowsPerPage,
    deleteDialogOpen,
    itemToDelete,
    editDialogOpen,
    addDialogOpen,
    user,
    AddUser,
    editingUser,
    searchTerm,
    citizenIdError,
    pinIdError,
    setAddUser,
    setSearchTerm,
    handleSearch,
    setEditUser,
    handleInputChange,
    handleInputChangeCitizen,
    handleInputChangePin,
    handleImageChange,
    resetUser,
    handleSelectChange,
    handleInputEditChange,
    fetchUserList,
    handleAdd,
    handleEdit,
    handleCloseEditDialog,
    handleEditConfirmed,
    handleCloseAddDialog,
    handleAddConfirmed,
    handleSelectAll,
    handleCheckboxChange,
    handleDelete,
    handleDeleteConfirmed,
    handleDeleteAll,
    handleCloseDeleteDialog,
    handleChangePage,
    handleChangeRowsPerPage,
    markItemAsUpdated,
    handleChange,
    handleEditImageChange
  };
};

export default useStudentList;
