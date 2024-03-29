import RoomService from '../../../auth/service/RoomService';
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const LineChartComponent: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const token: string = localStorage.getItem('token')!;
        const result = await RoomService.getdaudata(token);
        setData(result.dataset);
    };

    fetchData();
  }, []);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="x" stroke="#27005D"  />
        <YAxis stroke="#27005D"/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="y" stroke="#9400FF" name='จำนวน' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
