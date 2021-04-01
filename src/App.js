
import { PostProperty,Signup,Input,Dashboard,Filters,Detail ,Radius,Listproperty,AdminDashboard,Mylist,History} from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
function App() {
  return (
 <div>
   <Router>
     <Switch>
<Route path="/login" exact component={Input}/>
<Route path="/signup" exact component={Signup}/>
<Route path="/dashboard" exact component={Dashboard}/>
<Route path="/filters" exact component={Filters}/>
<Route path="/detail" exact component={Detail}/>
<Route path="/radius" exact component={Radius}/>
<Route path="/favourite" component={History}/>
<Route path="/listproperty" component={Listproperty}/>
<Route path="/postProperty" component={ PostProperty}/>
<Route path="/adminDashboard" component={ AdminDashboard}/>
<Route path="/mylist" component={ Mylist}/>
     </Switch>
   </Router>

 </div>
  );
}

export default App;
