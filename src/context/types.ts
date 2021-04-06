import { PollItemProps } from '../components/PollWidget/types';

export interface PollTypes {
  title: string;
  items: PollItemProps[];
  votes: number;
}

export interface InitialState {
  poll: PollTypes;
  setPoll?: React.Dispatch<React.SetStateAction<PollTypes>>;
  clearContext?: () => void;
}
