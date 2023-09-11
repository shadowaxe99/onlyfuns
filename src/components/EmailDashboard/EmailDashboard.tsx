import React, { useState, useEffect } from 'react';
import { getEmailData } from '../../utils/api';

const EmailDashboard = () => {
  const [emailData, setEmailData] = useState([]);

  useEffect(() => {
    fetchEmailData();
  }, []);

  const fetchEmailData = async () => {
    try {
      const data = await getEmailData();
      setEmailData(data);
    } catch (error) {
      console.error('Error fetching email data:', error);
    }
  };

  return (
    <div>
      <h1>Email Dashboard</h1>
      {emailData.map((email) => (
        <div key={email.id}>
          <h3>{email.subject}</h3>
          <p>{email.body}</p>
        </div>
      ))}
    </div>
  );
};

export default EmailDashboard;