import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartContainer = styled.div`
  width: 100%;
  height: 80%;

  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px;
  overflow: hidden;

  @media (max-width: 900px) {
    display: none;
  }
`;

export default function PieChart() {
  const { tasks } = useSelector((state) => state.tasksReducer);

  const percentageByStatus = tasks.reduce((acc, task) => {
    !acc[task.status] && (acc[task.status] = 0);
    acc[task.status] += 1;
    return acc;
  }, {});

  const data = {
    labels: ['Nuevas', 'En progreso', 'Terminadas'],
    datasets: [
      {
        label: '# of Votes',
        data: [
          percentageByStatus.NEW || 0,
          percentageByStatus['IN PROGRESS'] || 0,
          percentageByStatus.FINISHED || 0,
        ],
        backgroundColor: ['#ff638433', '#ff9f4033', '#54f09533'],
        borderColor: ['#ff6384', '#ff9f40', '#54f095'],
        borderWidth: 2,
      },
    ],
  };

  return (
    <PieChartContainer>
      <Pie data={data} />
    </PieChartContainer>
  );
}
