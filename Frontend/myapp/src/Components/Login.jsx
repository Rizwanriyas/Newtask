import React, {  useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = () => {
    if (!password || !email) {
      alert("Please enter details");
    } else {
      axios.post("http://localhost:3001/login", { email, password }).then((res) => {
        console.log(res.data);
        let error = res.data.isError;
        if (error) {
          console.log("error");
          alert("error")
        } else {
          
          navigate('/home');
        }
      });
    }
  };
  function signup(){
    navigate('/register')
  }

  return (
    <div>
      <h1 className="text-center">LOGIN</h1>
      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <div className="d-flex justify-content-between">
        <Button variant="primary" type="button" onClick={submit}>
          Submit
        </Button>
        <Button variant="primary" type="button" onClick={signup}>
          Signup
        </Button>
        </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
