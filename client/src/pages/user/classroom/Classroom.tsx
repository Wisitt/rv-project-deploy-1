// ClassRoomAdmin.tsx
import UserService, { ClassSchedule } from '../../../auth/service/UserService';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TimetableContainer = styled.div`
  margin: 20px auto;
  text-align: center;
  width: 100%;
`;

const TimetableHeader = styled.h1`
  font-size: 24px;
`;

const TimetableTable = styled.table`
  border-collapse: collapse;
  width: 70%;
  margin: 30px auto;
`;

const TimetableTh = styled.th`
  color: black;
  border: 1px solid black;
  height: 50px;
  text-align: center;
  background-color: #f2f2f2;
`;

const TimetableTd = styled.td`
  color: black;
  border: 1px solid black;
  height: 50px;
  text-align: center;
`;

const TimetableDaysColumn = styled.td`
  color: black;
  border: 1px solid black;
  height: 50px;
  text-align: center;
  background-color: #f2f2f2;
`;

const generateTimeSlots = () => {
  const startTime = '08:00:00';
  const endTime = '18:00:00';
  const timeSlots = [];

  let currentSlot = startTime;

  while (currentSlot < endTime) {
    timeSlots.push({ start: currentSlot, end: addHour(currentSlot) });
    currentSlot = addHour(currentSlot);
  }

  return timeSlots;
};

const addHour = (time: string): string => {
  const [hours, minutes, seconds] = time.split(':').map(Number);
  const newDate = new Date(0, 0, 0, hours, minutes, seconds + 60 * 60);
  return newDate.toTimeString().slice(0, 8);
};

const Classroom: React.FC = () => {
  const [timetableData, setTimetableData] = useState<ClassSchedule[]>([]);
  const timeSlots = generateTimeSlots();

  const generateTimetableRows = () => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
      <>
        {daysOfWeek.map((day) => (
          <tr key={day}>
            <TimetableDaysColumn><b>{day}</b></TimetableDaysColumn>
            {timeSlots.map((timeSlot) => (
              <TimetableTd colSpan={3} key={`${day}-${timeSlot.start}`}>
                {timetableData.map((item) => (
                  item &&
                  item.day_of_week === day &&
                  item.start_time === timeSlot.start &&
                  item.end_time === timeSlot.end && (
                    <p key={item.id}>
                      <b className="text-danger">{`${item.subject_name} - ${item.room_number}`}</b>
                    </p>
                  )
                ))}
              </TimetableTd>
            ))}
          </tr>
        ))}
      </>
    );
  };

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await UserService.getClassSchedule();
        setTimetableData(Array.isArray(response) ? response : [response]);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchSchedule();
  }, []);

  return (
    <div className="container d-flex justify-center align-items-center" style={{ height: "100vh" }}>
      <TimetableContainer>
        <TimetableHeader>TIME TABLE</TimetableHeader>
        <TimetableTable>
          <thead>
            <tr>
              <TimetableTh><b>Day/Period</b></TimetableTh>
              {timeSlots.map((timeSlot) => (
                <TimetableTh colSpan={3} key={timeSlot.start}><b>{`${timeSlot.start} - ${timeSlot.end}`}</b></TimetableTh>
              ))}
            </tr>
          </thead>
          <tbody>
            {generateTimetableRows()}
          </tbody>
        </TimetableTable>
      </TimetableContainer>
    </div>
  );
};

export default Classroom;
