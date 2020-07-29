import React from 'react';
import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <h1>The Best Dashboard</h1>
      <h2>that you have ever seen</h2>
      <Button onClick={signOut} style={{ width: 'auto', marginTop: '30px' }}>
        Sign Out
      </Button>
    </Container>
  );
};

export default Dashboard;
