/*

Bitwise solution
‘a’: 1100001 — ‘A’: 1000001;
‘b’: 1100010 — ‘B’: 1000010;
‘c’: 1100011 — ‘C’: 1000011;

*/

export const toUpperCase = (str: string): string => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i) & 223;
    result += String.fromCharCode(charCode);
  }
  return result;
};
