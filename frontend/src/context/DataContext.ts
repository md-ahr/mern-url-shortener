import { createContext } from 'react';
import { initialState } from './../reducer/dataReducer';

export const DataContext = createContext(initialState);

export const DataDispatchContext = createContext({} as ReturnType<any>);
