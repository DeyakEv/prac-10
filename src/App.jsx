import { useState, useEffect } from 'react';
import Profile from './components/Profile';
import Cards from './components/Cards';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [period, setPeriod] = useState('daily');

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Error loading data:', err));
  }, []);

  return (
    <main className="dashboard">
      <Profile period={period} setPeriod={setPeriod} />
      <Cards data={data} period={period} />
    </main>
  );
}

export default App;