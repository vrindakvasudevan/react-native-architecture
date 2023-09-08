import React from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useUsers } from '@api/hooks/users';
import styles from './usersStyles';

const Users = () => {
  type User = {
    id: string;
    name: string;
  };
  const { isLoading, data } = useUsers();
  const usersData = data as User[];

  if (isLoading) {
    return <ActivityIndicator style={styles.loader} size="large" />;
  }

  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <TouchableOpacity>
        <View style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={usersData} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default Users;
