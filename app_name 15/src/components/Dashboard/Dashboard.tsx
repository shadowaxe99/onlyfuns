import React, { useEffect, useState } from 'react';
import { getCreators } from '../../services/ApiService';
import CreatorList from '../CreatorList/CreatorList';

const Dashboard: React.FC = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    fetchCreators();
  }, []);

  const fetchCreators = async () => {
    try {
      const response = await getCreators();
      setCreators(response.data);
    } catch (error) {
      console.error('Error fetching creators:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <CreatorList creators={creators} />
    </div>
  );
};

export default Dashboard;