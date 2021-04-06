import React, { createContext, useContext, useState } from 'react';
import { InitialState } from './types';

const itinialState: InitialState = {
  poll: {
    title: '',
    items: [],
    votes: 0
  }
};

export const PollContext = createContext<InitialState>(itinialState);

export const PollContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [poll, setPoll] = useState(itinialState.poll);
  const clearContext = () => setPoll(itinialState.poll);

  return (
    <PollContext.Provider value={{ poll, setPoll, clearContext }}>
      {children}
    </PollContext.Provider>
  );
};

export const usePollState = (): InitialState => useContext(PollContext);
