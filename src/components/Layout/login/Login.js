import React, {useState} from "react";
import { Form, Button} from "react-bootstrap";
import "./Login.css";




export default function Login(props) {
  const [provider, setProvider] = useState('Inrupt');

  const handleOnChange = (event) => {
    event.preventDefault();
    setProvider(event.target.value);
  }
  
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(provider)
  }

  return (
     <div id="container">
      <div className="background-image"></div>
      <div className="background-div"></div>
        <h1>Login</h1>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group controlId="provider">
            <Form.Label>Choose a provider</Form.Label>
            <Form.Control as="select" onChange={handleOnChange}>
              <option>Inrupt</option>
              <option>Solid Community</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
    </div>
  );
}
