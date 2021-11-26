import React from 'react'
import {Form,Button} from  'react-bootstrap'
import { Link } from 'react-router-dom'
const connexion = () => {
    return (
        <div>
            <Form>
                <h1> CONNEXION </h1>
                <Link className="link" to="/inscription" >Inscription </Link>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>



  <h3>
  <Button variant="primary" type="submit">
    connecter
  </Button>
  </h3>
</Form>
        </div>
    )
}

export default connexion