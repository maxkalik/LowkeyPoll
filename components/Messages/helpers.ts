export const wait = (timeout: number): Promise<number> => {
  return new Promise<number>(resolve => setTimeout(resolve, timeout));
};
