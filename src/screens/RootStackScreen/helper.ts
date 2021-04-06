import { PollTypes } from '../../context/types';
import { MainScreenRouteProp } from '../MainStackScreen/types';

export const parsePollFromNavigationRouteParam = ({
  params
}: MainScreenRouteProp): PollTypes => {
  const question = JSON.stringify(params.question);
  const optionsJson = JSON.stringify(params.options);
  const options = JSON.parse(optionsJson);
  return {
    title: question.replace(/['"]+/g, ''),
    items: options.map((text: string) => {
      return { text };
    }),
    votes: 0
  };
};

export const checkCreateAvailability = (
  route: MainScreenRouteProp
): boolean => {
  const poll = parsePollFromNavigationRouteParam(route);
  if (poll.title.length > 0 && poll.items.length > 1) {
    return poll.items[0].text.length > 0 && poll.items[1].text.length > 0;
  } else {
    return false;
  }
};
