import React from "react";
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Character(props){
    
        return( 
        <Row className=" container d-flex justify-content-center align-items-center h-90 ">
          <Col>
            <Card className="">
            <Card.Title><h3>{props.name}</h3></Card.Title>
              <Card.Body>
              <Card.Img variant="top"  src={props.url} />
              </Card.Body>
            </Card>
          </Col> 
         </Row>
            
           /* <div className='character'>
               <div>
               <h3>{props.name}</h3>
               </div>
               <div>
               <img className='imagen' src={props.url}></img>
               </div>
            </div>*/
        )
}