import React from "react";
import PropTypes from "prop-types";
import Avatar from '@material-ui/core/Avatar';
import img from 'C:/Users/marie/Desktop/mini-proj/src/mini-proj/images/avatars/image.jpg';

import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";

const userDetails = ({ userDetails }) => (
  <Card small className="mb-4 pt-3"> 

    <CardHeader className="border-bottom text-center bg-dark">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={img}
          alt={userDetails.name}
          width="110"
        />
        

      </div>

      <h4 className="mb-0">{userDetails.name}</h4>
      <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>
      
      <Button href="/tables" pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">assignment_ind</i> Team Members
      
      </Button>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4" className="bg-dark">
        
      </ListGroupItem>
      <ListGroupItem className="p-4" className="bg-dark">
        <strong className="text-muted d-block mb-2">
          {userDetails.metaTitle}
        </strong>
        <span className="text-white">{userDetails.metaValue}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);


userDetails.propTypes = {
  
  userDetails: PropTypes.object
};

userDetails.defaultProps = {
  userDetails: {
    name: "Mariem Moalla",
    require : {img},
    jobTitle: "Web Developer",
    metaTitle: "Description",
    metaValue:
      "Im a third-year student at the University of Manouba Im highly motivated and enthusiastic, always willing to learn new things.I gain the most satisfaction at work when I'm challenged, also when I have the opportunity to learn, develop, and meet the organization's goals and customer's expectations.Currently interested in web development, learning more about various technologies and frameworks, I am aiming to become a competitive full stack web developer and in learning artificial intelligence and machine learning."
  }
};

export default userDetails;