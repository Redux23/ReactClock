import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


function Register() {
  return (
    <div>
      <div className="App-field">

        <Form id="Form">
          <h3 className="h3">SIGN UP TO YOUR ACCOUNT</h3>

          <Form.Group controlId="formBasicUserName">
            <Form.Control type="Fullname" placeholder="Full Name" size="sm" required />
          </Form.Group>


          <Form.Group controlId="formBasicUserName">
            <Form.Control type="Username" placeholder="Username" size="sm" required />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="example@gmail.com" size="sm" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">

            <Form.Control type="password" placeholder="Password" size="sm" required />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">

            <Form.Control type="password" placeholder="Confirm Password" size="sm" required />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox" id="checkbox">
            <Form.Check type="checkbox" label="Keep me signed in" size="sm" required />
          </Form.Group>


          <Button variant="primary" type="submit" size="lg" block>
            SIGN IN
  </Button>

          <Form.Text className="text-muted">
            forgot your password?
 </Form.Text>
        </Form>
      </div>

    </div>
  )
}

export default Register;