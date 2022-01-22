import { createContext, useReducer } from 'react'

// context intialize only one time.
// when app build


// create context
export const storeContext = createContext()


export const ActionTypes = {
  SET_LAT_LONG: 'SET_LAT_LONG',
  SET_COFFEE_STORES: 'SET_COFFEE_STORES',
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_LAT_LONG:
      return {
        ...state,
        ...action.payload,
      };

    case ActionTypes.SET_COFFEE_STORES:
      return { ...state, coffeeStores: action.payload };

    default:
      throw new Error(`Unhandeled action type: ${action.type}`);
  }
};

// initialize context
const StoreProvider = ({children}) =>{
  const initialState = {
    latLong : '',
    coffeeStores : []
  }

  const [state, dispatch] = useReducer(storeReducer,initialState)
  return <storeContext.Provider value={{ 
    state ,  //state come from useReucer
    dispatch
    }} >
    {children}
  </storeContext.Provider>
}

export default StoreProvider;