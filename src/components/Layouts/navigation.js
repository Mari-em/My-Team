/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Img from "C:/Users/marie/Desktop/mini-proj/src/mini-proj/images/logo.png";

class navigation extends Component {
   
    render() { 
        return (  
        <nav className="navbar navbar-expand-lg main-navbar sticky-top navbar-dark bg-dark">
          
        <Avatar alt="Remy Sharp" src={Img}  />
        <div className="navbar-brand"> My Team</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> 
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active " >
              
              <a className="nav-link" href="/">User Profile </a>
            
            </li>
            <li className="nav-item active" >
              <a className="nav-link" href="/tables">Team Members</a>
            </li>
            
          </ul>
        </div>
        
      </nav>);
    }
}
 
export default navigation;