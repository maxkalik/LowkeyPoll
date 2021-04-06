import users from './users';
import { ChatItemProps } from '../components/ChatItem/types';

const messages: ChatItemProps[] = [
  {
    ...users.ilonaMarly,
    text: 'Guys, who is going?'
  },
  {
    ...users.keisyLensly,
    text: 'We are all ready to go!'
  },
  {
    ...users.maxKalik,
    text: 'I’m in! Also could grab some sandwiches if you want 🥪'
  },
  {
    ...users.elzaMitre,
    text:
      'I’m in also! Mike’s Diner would be a good choice 🔥🔥🔥 how about everyone else? Any ideas?'
  },
  {
    ...users.mikePhillips,
    text: 'Sounds good to me!!!'
  },
  {
    ...users.edwinBass,
    text: '@kellyhodges are you in???'
  },
  {
    ...users.kellyHodges,
    text: 'Nice! 12 ppl in total. Let’s gather at the metro station! 🚆🚆🚆'
  },
  {
    ...users.bradFreeman,
    text: 'Okie dokie!!'
  }
];

export default messages;
