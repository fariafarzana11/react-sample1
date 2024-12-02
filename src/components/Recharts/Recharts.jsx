import { LineChart, Line, YAxis, XAxis,Tooltip } from 'recharts';

const Recharts = () => {
    const students = [
            { "id": 1, "name": "Alice", "marks": 85, "result": "Pass" },
            { "id": 2, "name": "Bob", "marks": 72, "result": "Pass" },
            { "id": 3, "name": "Charlie", "marks": 45, "result": "Fail" },
            { "id": 4, "name": "David", "marks": 66, "result": "Pass" },
            { "id": 5, "name": "Ella", "marks": 93, "result": "Pass" },
            { "id": 6, "name": "Frank", "marks": 55, "result": "Pass" },
            { "id": 7, "name": "Grace", "marks": 40, "result": "Fail" },
            { "id": 8, "name": "Hannah", "marks": 78, "result": "Pass" },
            { "id": 9, "name": "Ian", "marks": 62, "result": "Pass" },
            { "id": 10, "name": "Jack", "marks": 32, "result": "Fail" }  
    ]
        return (
            <div>
               <LineChart width={800} height={400} data={students}>
                <Line type='monotone' dataKey='marks' stroke="#82ca9d"></Line>
                <Line type='monotone' dataKey='result' stroke="#82ca9d"></Line>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                </LineChart> 
            </div>
            
        )
    }
    export default Recharts;

