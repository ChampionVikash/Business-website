import React,{ useContext,useReducer,useEffect} from "react"
import reducer from "./reducer"

const AppContext = React.createContext()

const API = "https://championvikash.github.io/jsonfile/index.json"

const intialState = {
  name: "",
  image: "",
  services: []
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,intialState)
 
  
const updateHomePage = () => {
  return dispatch(
   {
    type: "HOME_UPDATE",
    payload: {
     name: "Champion Vikash",
     image: "./images/hero.svg",
    },
   });
 }
 
 const updateAboutPage = () => {
  return dispatch(
   {
    type: "ABOUT_UPDATE",
    payload: {
     name: "Vikash Kumar",
     image: "./images/about1.svg",
    },
   });
  }
  
    //  to get the api data
  const getServices = async (url) => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      dispatch({ type:"GET_SERVICES", payload: data})
    } catch (error) {
      console.log(error)
    }
  
  }

  // to call the api

  useEffect(() => {
    getServices(API);
  },[])
 
 return <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>{children}</AppContext.Provider>
 
}

// global custom hook

const useGlobalContext = () => {
 return useContext(AppContext)
}

export {AppContext ,AppProvider,useGlobalContext}