import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {  useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Update() {
  const Navigate = useNavigate()
  const { id } = useParams();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [display, setDisplay] = useState({ name: "", author: "" });

  useEffect(() => {
    axios.get(`http://localhost:3001/display/${id}`).then((res) => {
      setDisplay(res.data);
    });
  }, [id]);

  const submit = async () => {
    try {
      await axios.put(`http://localhost:3001/update/${id}`, { name, author }).then((res)=>{
       Navigate('/home')
       alert("updated")
      });
      
    } catch (error) {
      console.error("An error occurred:", error);
    
    }
   
  };

  return (
    <div>
      <Form style={{ width: "500px", marginLeft: "30vw" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name} 
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            value={author} 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Update;
