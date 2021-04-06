import { PollTypes } from '../../context/types';
import { UserType } from '../../data/types';

export interface ChatItemProps extends UserType {
  text?: string;
  poll?: PollTypes;
}
