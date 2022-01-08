import React, { createContext, useContext, useReducer } from 'react';

export const stateContext = createContext();

export const StateProvider = ({ reducer, intialState, children }) => (
	<stateContext.Provider value={useReducer(reducer, intialState)}>
		{children}
	</stateContext.Provider>
);

export const useStateValue = () => useContext(stateContext);