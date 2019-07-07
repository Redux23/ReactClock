import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Layout from '../layout';
import Alert from 'react-bootstrap/Alert';
const axios = require('axios')


class Register extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
      registerSuccess: false,
      registerFail: false
      
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChange = this.handleSubmit.bind(this)
  }

  handeleError(){
    console.log('THIS',this)
  }

  handleSubmit(event){
    event.preventDefault()
    // if (this.state.password===this.state.confirmPassword )
    axios.post('http://localhost:3009/Register', this.state)
    .then(function(response){
      const data = response.data
      if (data.status) {
        this.setState({
          registerSuccess: true,
          fullname: response.data.userDetail.fullname
        })
      }
      else{
        this.setState({
          registerFail: true,
        })
      }
    })
    .catch(function (error){
           console.log(error)
    });

  }
  handleChange(event){
    const value = event.target.value
    const id = event.target.id
    this.state[id] = value
  }

render(){

  return (
    
      <div>
      <div className="App-field">

        <Form id="Form" onSubmit={this.handleSubmit}>
          <h3 className="h3">SIGN UP TO YOUR ACCOUNT</h3>

          <Form.Group controlId="formBasicUserName">
            <Form.Control type="Fullname" onChange={this.handleChange} placeholder="Full Name" size="sm" required />
          </Form.Group>


          <Form.Group controlId="formBasicUserName">
            <Form.Control type="Username" onChange={this.handleChange} placeholder="Username" size="sm" required />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" onChange={this.handleChange} placeholder="example@gmail.com" size="sm" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">

            <Form.Control type="password" onChange={this.handleChange} placeholder="Password" size="sm" required />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">

            <Form.Control type="password" onChange={this.handleChange} placeholder="Confirm Password" size="sm" required />
          </Form.Group>

          {['checkbox'].map(type => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check className="leftCheck" inline label="Keep me signed in" type={type} id={`inline-${type}-1`} />
      </div>
      ))}



          <Button variant="primary" type="submit" size="lg" block>
            SIGN IN
  </Button>

          <Form.Text className="text-muted">
            forgot your password?
 </Form.Text>
        </Form>
      </div>
      {this.state.loginFail && (
      <Alert variant='danger'>
        <h4>
          login failed check details
    </h4>
      </Alert>
    )}

    {this.state.loginSuccess && (
      <Alert variant='success'>
        <h4>
          login in successfull {this.state.fullname}
        </h4>
      </Alert>
    )}

    </div>

    
    
  )
}
}
export default Register;