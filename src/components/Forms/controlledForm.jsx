import React from "react";
import'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from "react-bootstrap";
import { useState } from "react";
export function Validation(input){
    let errors={}
    if(!input.email){
        errors.email="Debe ingresar un correo"
    } else if(!/\S+@\S+\.\S+/.test(input.email)){ errors.email = "El correo debe ser valido"
}
if(input.asunto.length<10){
    errors.asunto= "Debe ingresar 10 o más caracteres"
}

if(input.mensaje.length>256){
    errors.mensaje = "No puede ingresar mas de 256 caracteres"
}
 return errors;
}

function ControlledForm(){
    const [state, setState] = useState({
        email: '',
        asunto: '',
        mensaje:'',
    })
    const [fails, setFails] = useState({
        email: "Debe ingresar un correo electronico",
        asunto: "Debe ingresar el asunto",
        mensaje:"Debe ingresar un mensaje"
        }) 
    function onSubmitForm(e) {
        e.preventDefault();
        alert("Sus respuestas se ha registrado");
    } 
   
    function onHandleChange(e) {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
        setFails(
            Validation({
                ...state,
                [e.target.name] : e.target.value
            })
        )
    }
      
        
    return(
        <div>
         <Form onSubmit={(e)=>onSubmitForm(e)}>
  <Form.Group className="mb-3" controlId="Email">
    <h3>Email</h3>
    <Form.Control type="email" placeholder="Enter email" name="email" value={state.email} onChange={(e) => onHandleChange(e)}  />
  </Form.Group>
  {fails.email && <p> {fails.email} </p>}
  <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
<Form.Group className="mb-3" controlId="asunto">
  <h3>Asunto</h3>
    <Form.Control type="text" placeholder="Normal text" name="asunto" value={state.asunto} onChange={(e)=>onHandleChange(e)} />
  </Form.Group>
  {fails.asunto && <p> {fails.asunto} </p>}
  <Form.Group className="mb-3" controlId="mensaje">
  <h3>Mensaje</h3>
    <Form.Control name="mensaje" type="text"value={state.mensaje}  as="textarea"placeholder="Leave a comment here"onChange={(e)=>onHandleChange(e)}style={{ height: '100px' }} />
  </Form.Group>
  {fails.mensaje && <p> {fails.mensaje} </p>}
  
  <Button variant="primary" type="submit" disabled={ fails.email || fails.asunto ||fails.mensaje ? true : false }>
    Submit
  </Button>
</Form>
</div>
    )

}  
export default ControlledForm;
