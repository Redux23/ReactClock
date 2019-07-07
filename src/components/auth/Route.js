import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from '../auth/Login';
import Register from './Register';
import Blog from './Blog'
import Layout from '../layout';




const CustomRouter = () => {
   return (
       <Router>
           <Layout>
           {/* <Route path='/' component={Blog}></Route> */}
           <Route path='/login/' component={Login}></Route>
           <Route path='/register/' component={Register}></Route>
           <Route path='/Blog/' component={Blog}></Route>
           </Layout>
       </Router>
   )
}

export default CustomRouter;
