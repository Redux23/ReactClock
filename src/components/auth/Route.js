import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from '../auth/Login';
import Register from './Register'



const CustomRouter = () => {
   return (
       <Router>
           {/* <Route path='/' component={}></Router> */}
           <Route path='/Login/' component={Login}></Route>
           <Route path='/Register/' component={Register}></Route>
       </Router>
   )
}

export default CustomRouter;
