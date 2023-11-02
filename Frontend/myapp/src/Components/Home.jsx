import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link} from "react-router-dom";
import { MDBInput, MDBCol } from "mdb-react-ui-kit";
import { useNavigate } from 'react-router-dom';



function Home() {
    const [first, setfirst] = useState([]);
    const [search, setsearch] = useState("");
    const [postsPerPage] = useState(3);
    const [currentPage] = useState(1);
    const Navigate = useNavigate()


    useEffect(() => {
        axios.get("http://localhost:3001/product").then((res) => {
          setfirst(res.data);
        }, []);
      });
      const filt = first.filter((srch) =>
      srch.name?.toLowerCase().includes(search.toLowerCase())||
      srch.author?.toLowerCase().includes(search.toLowerCase())
    );
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = filt.slice(indexOfFirstPost, indexOfLastPost);

  const deleteBook = (_id) => {
    axios.delete(`http://localhost:3001/delete/${_id}`).then((res) => {
      
    axios.get("http://localhost:3001/product").then((res)=>{
      setfirst(res.data);
      alert("Book deleted");
    })
    });
};
function add(){
  Navigate('/add')
}
// useEffect(() => {
//   // Clear the browsing history when the component mounts
//   window.history.pushState(null, null, "/");
// }, []);
function logout(){
  localStorage.clear();
  Navigate('/')
 
}

 return (
  <div className="container">
  <h2 className="text-center"> List</h2>

  <div className="d-flex justify-content-between align-items-center mb-3">
    <div>
      <button onClick={add} className="btn btn-primary">
        Add Product
      </button>
    </div>

    <div className="d-flex align-items-center">
      <MDBCol className="col-md-6"> 
        <MDBInput
          style={{ display: "inline" }}
          hint="Search"
          type="text"
          placeholder="Search here"
          onChange={(e) => setsearch(e.target.value)}
          className="form-control form-control-md" 
        />
      </MDBCol>
    </div>

    <div>
      <button className="btn btn-danger" onClick={logout}>
        Logout
      </button>
    </div>
  </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Book Name</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((item, index) => {
            return (
              <>
                <tr>
                  <td>*</td>
                  <td>{item.name}</td>
                  <td>{item.author}</td>
                  <td>
                    <Link to={`/edit/${item._id}`}>
                      <button className="btn btn-info">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteBook(item._id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
         
        </tbody>
      </Table>

      
    </div>
  )
}

export default Home