import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const Chart = () => {

  const [savedData, setSavedData] = useState([])

     useEffect(()=>{
       const allDonated = getStoredDonation();
       setSavedData(allDonated);
     },[])

     const data = [
       { name: 'Total Donation', value: 12},
       { name: 'Your Donation', value: 0 },

     ];
       data[1].value = savedData.length
       data[0].value = data[0].value - savedData.length



   return (

           <PieChart width={400} height={400}>
               <Pie
                   data={data}
                   cx="50%"
                   cy="50%"

                   labelLine={false}
                   label={renderCustomizedLabel}
                   outerRadius={200}
                   fill="#8884d8"
                   dataKey="value"
               >
                   {data.map((entry, index) => (
                   <Cell key={cell-${index}} fill={COLORS[index % COLORS.length]} />
                   ))}
               </Pie>
           </PieChart>

   );
};

export default Chart;