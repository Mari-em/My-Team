import React from "react";

import { Container } from "shards-react";
import {Row } from "shards-react";
import {Col} from "shards-react";
import { Card } from "shards-react";
import {CardHeader } from "shards-react";
import {CardBody} from "shards-react";

import Button from '@material-ui/core/Button';
import PageTitle from "../components/Tables/PageTitle";
import  { Component } from "react";
import axios from "axios";



class tables extends Component { 
 constructor(props) {
   super(props);
   this.state ={
   posts:[]
   }
 }
 componentDidMount(){
   axios.get('https://jsonplaceholder.typicode.com/posts')
   .then(Response => {this.setState ({posts:Response.data})   }   )
   .catch(console.log("error"))
 }
 deleteHandler = (id)=> {
  const p = this.state.posts[id];
  //console.log(p)
 //this.state.posts.splice(id, 1)
const newposts= this.state.posts.filter(pp => pp.id !== id)
console.log(this.state.posts) 
console.log(newposts)
axios.delete('https://jsonplaceholder.typicode.com/posts/1',p)
.then(Response => {console.log(Response)})
  }
 
 
  render()
  
  {const {posts}= this.state
 
     return(
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <Col lg="11">
      <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
      </Col>
      <Col ><Button  href="/add" variant="outlined" color="primary" >
   ADD
 </Button></Col>
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader  className="bg-dark">
            <h6 className="m-0">Active Members</h6>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
            <thead  className="thead-dark">
                <tr>
                  <th scope="col" className="border-0">
                    ID
                  </th>
                  <th scope="col" className="border-0">
                    First Name
                  </th>
                  <th scope="col" className="border-0">
                    Last Name
                  </th>
                  <th scope="col" className="border-0">
                    Role
                  </th>
                  <th scope="col" className="border-0">
                    Phone
                  </th>
                  <th scope="col" className="border-0">
                    description
                  </th>
                  <th scope="col" className="border-0">
                  </th>
                </tr>
              </thead>
             <tbody>
                { posts.length ? posts.map(post =><React.Fragment><tr><td>{post.id}</td><td></td><td> fqsdf</td><td>fqsdf </td><td>qdsfq</td><td><textarea rows="5" className="bg-dark text-white" value={post.title} readOnly="readonly"></textarea></td><td><Button color="secondary" onClick={this.deleteHandler.bind(this,post.id)}>Delete</Button></td></tr></React.Fragment>) : null }
               </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
    
    

 </Container>
);}}

export default tables;