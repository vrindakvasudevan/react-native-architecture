import useStore from './store';

export const useCounterActions = () => {
  const { increment, decrement } = useStore();
  return { increment, decrement };
};

export const useCounterState = () => {
  const count = useStore((state) => state.count);
  return { count };
};
