import React from "react";
import { Card } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Cards(props){
     return( 
       <>
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
         </>
       )}