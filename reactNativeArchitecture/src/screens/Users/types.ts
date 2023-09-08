type SendDataToParentFunction = () => void;

export type User = {
  id: string;
  name: string;
};

export type Props = {
  userId: string;
  sendDataToParent: SendDataToParentFunction;
};
