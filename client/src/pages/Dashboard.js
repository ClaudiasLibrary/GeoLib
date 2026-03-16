import React, { useState, useEffect } from "react";
import { fetchStats } from "../services/api";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [stats, setStats] = useState({ totalBooks: 0, totalUsers: 0, totalLoans: 0 });

  useEffect(() => {
    fetchStats().then(data => setStats(data));
  }, []);

  const data = {
    labels: ['Books', 'Users', 'Loan Requests'],
    datasets: [
      {
        label: 'Library Stats',
        data: [stats.totalBooks, stats.totalUsers, stats.totalLoans],
        backgroundColor: ['#2563eb', '#16a34a', '#d97706'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Library Dashboard' },
    },
  };

  return (
    <div className="page-container">
      <h2>Dashboard</h2>
      <Bar data={data} options={options} />
      <div style={{ marginTop: '20px' }}>
        <ul>
          <li>Total Books: {stats.totalBooks}</li>
          <li>Total Users: {stats.totalUsers}</li>
          <li>Total Loan Requests: {stats.totalLoans}</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;