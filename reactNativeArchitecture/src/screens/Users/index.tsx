import React, { useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useUsers } from '@api/hooks/users';
import styles from './styles';
import AddEditUser from './AddEditUser';
import { User } from './types';

const Users = () => {
  const { isLoading, data: usersData } = useUsers();
  const [isAddEditUser, setIsAddEditUser] = useState(false);
  const [userId, setUserId] = useState('');

  /**
   * Method to display add-edit user
   * @param userId id of selected user
   */
  const displayAddEditUser = (userId: string) => {
    setIsAddEditUser(true);
    setUserId(userId);
  };

  if (isLoading) {
    return <ActivityIndicator style={styles.loader} size="large" />;
  }

  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <TouchableOpacity onPress={() => displayAddEditUser(item.id)}>
        <View style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {!isAddEditUser ? (
        <FlatList
          data={usersData as User[]}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <AddEditUser userId={userId} sendDataToParent={() => setIsAddEditUser(false)} />
      )}
    </View>
  );
};

export default Users;
