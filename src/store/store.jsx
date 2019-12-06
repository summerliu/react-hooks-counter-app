import React, { createContext, useReducer, useContext } from "react";

const initialState = { count: 0 };

function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'reset':
            return {count: 0};
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            return state;
    };
}

const DispatchContext = createContext(0);
const StoreContext = createContext(0);

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
}

export const useDispatch = () => useContext(DispatchContext);
export const useStore = () => useContext(StoreContext);