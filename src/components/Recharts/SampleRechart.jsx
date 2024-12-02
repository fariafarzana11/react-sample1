import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class SampleRechart extends PureComponent {
  render() {
    const students = [
      { id: 1, name: "Alice", marks: 85, result: "Pass" },
      { id: 2, name: "Bob", marks: 72, result: "Pass" },
      { id: 3, name: "Charlie", marks: 45, result: "Fail" },
      { id: 4, name: "David", marks: 66, result: "Pass" },
      { id: 5, name: "Ella", marks: 93, result: "Pass" },
      { id: 6, name: "Frank", marks: 55, result: "Pass" },
      { id: 7, name: "Grace", marks: 40, result: "Fail" },
      { id: 8, name: "Hannah", marks: 78, result: "Pass" },
      { id: 9, name: "Ian", marks: 62, result: "Pass" },
      { id: 10, name: "Jack", marks: 32, result: "Fail" } 
    ];

    return (
      <div style={{ width: '30%', height: 400, margin: 100 }}>
        <ResponsiveContainer>
          <BarChart
            data={students}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="marks" fill="#82ca9d"  activeBar={<Rectangle fill="#8884d8" stroke="blue" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default SampleRechart;
