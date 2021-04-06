
import { PostProperty,Signup,Input,Dashboard,Filters,Detail ,Radius,Listproperty,AdminDashboard,Mylist,History} from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import React,{useReducer} from 'react';
export const consumerdata=React.createContext();
function App() {
 
const initialdata={
  userid:null,
  token:null,
  firstname:null,
  lastname:null,
  
}


const reducer =(state,action)=>{
  switch (action.type) {
    case "LOGIN":
      
   return {
     ...state,userid:action.userid,token:action.token,firstname:action.firstname,lastname:action.lastname,
   }
  
    default:
     return state;
  }
}
const [state,dispatch]=useReducer(reducer,initialdata);

  return (
 <div>
   <Router>
     <Switch>
       <consumerdata.Provider value={{data:state,setdata:dispatch}}>
<Route path="/login" exact component={Input}/>
<Route path="/signup" exact component={Signup}/>
<Route path="/dashboard" exact component={Dashboard}/>

</consumerdata.Provider>
     </Switch>
   </Router>

 </div>
  );
}

export default App;
