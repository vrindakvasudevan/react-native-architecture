import axiosClient from '@api';
import { useRequestProcessor } from '@api/requestProcessor';

const { query } = useRequestProcessor();

/**
 * Method to fetch list of users
 * @returns list of users
 */
const useUsers = () => {
  const fetchUsers = async () => {
    const response = await axiosClient.get('/users');
    return response.data;
  };

  return query(['users'], fetchUsers);
};

export { useUsers };
