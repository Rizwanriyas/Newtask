import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Addproduct() {
    const [name, setname] = useState("");
    const [author, setauthor] = useState("");
    const Navigate = useNavigate()

    const submit = () => {
      if (!name || !author) {
        alert("Please fill all columns");
      } else {
        axios
          .post("http://localhost:3001/create", { name, author})
          .then((res) => {
            Navigate('/home')
              alert("Book details added to library");
            // let error = res.data.ifError;
            // if (error) {
            //   alert("Book already added to library");
            // } else {
              
              
              
            // }
          });
      }
    };
  return (
    <div>
         <Form style={{ width: "500px", marginLeft: "30vw" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Enter Book Name"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            onChange={(e) => setauthor(e.target.value)}
            type="text"
            placeholder="Author Name"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Addproduct