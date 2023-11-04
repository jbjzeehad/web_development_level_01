import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';


const LineChart = () => {


    const subjectMarksData = [

        { id: 1, name: "John Doe", math: 85, physics: 78, chemistry: 90 },
        { id: 2, name: "Jane Smith", math: 78, physics: 85, chemistry: 88 },
        { id: 3, name: "Michael Johnson", math: 92, physics: 92, chemistry: 96 },
        { id: 4, name: "Emily Brown", math: 65, physics: 70, chemistry: 72 },
        { id: 5, name: "William Lee", math: 88, physics: 84, chemistry: 90 },
        { id: 6, name: "Sarah Taylor", math: 76, physics: 75, chemistry: 78 },
        { id: 7, name: "David Wilson", math: 90, physics: 88, chemistry: 92 },
        { id: 8, name: "Olivia Martinez", math: 70, physics: 68, chemistry: 75 },
        { id: 9, name: "James Davis", math: 95, physics: 92, chemistry: 98 },
        { id: 10, name: "Sophia Anderson", math: 82, physics: 80, chemistry: 84 }

    ];






    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math' stroke='orange'></Line>
                <Line dataKey={'physics'} stroke='red'></Line>
                <Line dataKey='chemistry' stroke='white'></Line>

            </LChart>
        </div>
    );
};

export default LineChart;