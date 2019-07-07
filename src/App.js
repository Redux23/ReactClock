import React from 'react';
import './App.css';
//  import logo from './logo.svg';
// import Bright from './components/Bright'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form'
// import Clock from './components/clock/clock.js'
// import Login from './components/Login';
// import Blog from './Blog';
import Route from './components/auth/Route'

function App() {
  
  return (


   
    <div className="App-header">
      {/* <Login></Login> */}
      <Route></Route>
      {/* <Clock></Clock> */}
    </div> 

   

  );
}
export default App;


// function App() {
//   return (
// <div className="App-header">


//       {/* <Button variant="flat" size="xxl"s>Click me</Button> */}

//       <Form>

//         <Form.Group controlId="formBasicUserName">
//           <Form.Label>Username</Form.Label>
//           <Form.Control type="Username" placeholder="Must have at least 6 characters" required/>

//         </Form.Group>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" required/>
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//     </Form.Text>
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" required/>
//         </Form.Group>
//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control type="password" placeholder="Confirm Password" required/>
//         </Form.Group>

//         <Form.Group controlId="formGridAddress1">
//           <Form.Label>Address</Form.Label>
//           <Form.Control placeholder="12 Yaba Left" required/>
//         </Form.Group>


//         <Button variant="primary" type="submit">
//           Submit
//   </Button>
//       </Form>


//       {/* <h6>
// He stacks money in queues.
// </h6> */}

//    </div>
//    );
//  }

//  export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       date: new Date()

//     }
//   }

//   render() {

//     return (
//       <div className="App-header">

//        <Clock></Clock>
//       </div>
//     )
//   }
// }

// export default App;
