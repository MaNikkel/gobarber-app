import React from 'react';
import { View, Button, Text } from 'react-native';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={signOut} title="btn" />
    </View>
  );
};

export default Dashboard;