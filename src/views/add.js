import React, { Component } from "react";
import { CardBody } from "shards-react";
import PropTypes from "prop-types";
import axios from 'axios';

import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";

class add extends Component { 
  constructor(props){
    super(props)
    //1st step
    this.state = { 
    fname:'',
    lname:'',
    role:'',
    phone:'',
    desc:''
    }
  }
  changeHandler = (e)=> {this.setState({[e.target.name]:e.target.value})}
  
  submitHandler= (e)=> {
    e.preventDefault()
  console.log(this.state)
     axios.post('https://jsonplaceholder.typicode.com/posts/1',this.state)
    .then(Response => {console.log(Response)})
  }
 render (){
  //2nd step 
  
  const { fname,lname,role,desc,phone}=this.state;
  
   return(
    <Row>
       
       <Col lg="2" > </Col>
    <Col lg="8">
    <Card small className="mb-4">
      <CardHeader className="border-bottom" className="bg-dark">
        <h6 className="m-0">Acount Details</h6>
      </CardHeader>
     <CardBody className="bg-dark p-0 pb-3">
      <ListGroup flush >
        <ListGroupItem className="p-3" className="bg-dark">
          <Row>
            <Col>
              <Form onSubmit={this.submitHandler}>
               <Row >
                  {/* First Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="FirstName" className="text-white">
                      First Name
                      </label>
                      <FormInput type="text" name="fname"value={fname}onChange={this.changeHandler}/>
                  </Col>

                  {/* Last Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="LastName" className="text-white" >
                      Last Name</label>
                      <FormInput type="text" name="lname"value={lname}onChange={this.changeHandler}/>
                      
                    
                  </Col>
                  </Row>
                 
                
                <Row >
                    <Col lg="6">
                         <label htmlFor="Address" className="text-white" >Role</label>
                         <FormInput type="text" name="role"value={role}onChange={this.changeHandler}/>
                         </Col>
                         <Col lg="6">
                          <label htmlFor="Phone" className="text-white" >Phone</label>
                          <FormInput type="text" name="phone" value={phone}onChange={this.changeHandler}/>
                </Col>
                    </Row>
                
                
                
                  
                
                <Row >
                  {/* Description */}
                  <Col md="12" className="form-group">
                    <label htmlFor="Description" className="text-white" name="desc" value={desc} onChange={this.changeHandler}>
                      Description</label>
                      <FormTextarea type="text" name="desc" value={desc}onChange={this.changeHandler} rows="5"/>
                  </Col>
                </Row>
                
                <Button theme="accent"> Add Member</Button>

              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </CardBody>
    </Card>
    </Col>
    <Col lg="2" > </Col>
    </Row>
    
    )
  }
}
  
  export default add;