import React, { useEffect, useState } from 'react';
import { getCreators } from '../../services/ApiService';

const CreatorList: React.FC = () => {
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
      <h2>Creator List</h2>
      <ul>
        {creators.map((creator) => (
          <li key={creator.id}>{creator.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CreatorList;