import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryResult,
  QueryKey,
  QueryFunction,
  MutationKey,
  UseMutationResult,
  MutationFunction,
} from '@tanstack/react-query';

/* Function to handle get and mutate query */
export function useRequestProcessor() {
  const queryClient = useQueryClient();

  /**
   * Method for get query
   *
   * @param key query key
   * @param queryFunction query function
   * @param options options
   * @returns query result of the type UseQueryResult
   */
  function query(key: QueryKey, queryFunction: QueryFunction, options = {}): UseQueryResult {
    return useQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options,
    });
  }

  /**
   * Method for mutate query
   *
   * @param key mutate key
   * @param mutationFunction mutate function
   * @param options options
   * @returns mutated result of the type UseMutationResult
   */
  function mutate(
    key: MutationKey,
    mutationFunction: MutationFunction,
    options = {}
  ): UseMutationResult {
    return useMutation({
      mutationKey: key,
      mutationFn: mutationFunction,
      onSettled: () => queryClient.invalidateQueries(key),
      ...options,
    });
  }

  return { query, mutate };
}
