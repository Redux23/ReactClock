import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
const axios = require('axios');



class Login extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      loginSuccess: false,
      loginFail: false,
      fullname: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleChange = this.handleSubmit.bind(this)

  }

  handleError() {
    console.group('THIS', this);

  }


  handleSubmit(event) {
    event.preventDefault()
    axios.post('http://localhost:3009/login', this.state)
      .then(function (response) {
        const data = response.data
        if (data.status) {
          this.setState({
            loginSuccess: true,
            fullname: response.data.userDetail.fullname

          })
        }
        else {
          this.setState({
            loginFail: true
          })
        }
      })
      .catch(function (error) {
        console.log(error)
      });
  }
  handleChange(event) {
    const value = event.target.value
    const id = event.target.id
    this.state[id] = value

  }






  render() {

    return (
      <div className="App-header">

        <div className="App-field">

          <Form onSubmit={this.handleSubmit
          }>
            <h3 className="h3">LOGIN IN TO YOUR ACCOUNT</h3>

            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" onChange={this.handleChange} placeholder="example_id@gmail.com" required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" onChange={this.handleChange} placeholder="Password" required />
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
      {this.state.loginFail & (
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
      
      export default Login;
