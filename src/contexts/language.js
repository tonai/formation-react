import { createContext } from 'react';
const context = createContext({
  t: null,
  language: 'en',
  setLanguage: null
});
export default context;
