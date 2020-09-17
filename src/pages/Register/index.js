import React, {Component} from 'react'
import {Form, FormGroup,Label,Input, Button} from 'reactstrap'



export default class Register extends Component{

    constructor(props){
        super(props)
        
        this.state = {
            email:'',
            password:'',
            passwordCon:''

        };
    }

    submit= () => {

        


        if(this.email==null|| this.password==null){
            alert("Email ou senha não podem ser nulos");
            return false;


        

        }else if(this.password.length<3){
            alert("a senha deverá ter mais de três caracters");
            return false   

        }
        
        else{

       
 
        const requestInfo = {
            method:'POST',
            body:JSON.stringify({ email: this.email, password: this.password, passwordCon: this.passwordCon}),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };
        fetch('https://reqres.in/api/register', requestInfo)
    .then(response => {
        
        if(response.ok){
            return response.json()
         
        }
        
    })
    .then(token => {
        localStorage.setItem('token',token)  
        window.location.reload(false);
        
    })
    
}

    }


    

    render(){
        return(
            <div className="col-md-6 offset-md-3" >
                
                <hr className="my-3"/>
                <h1>Registre-se</h1>
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" id="email" onChange={e => this.email = e.target.value} placeholder="inform seu e-mail"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Senha</Label>
                        <Input type="password" id="password" onChange={e => this.password = e.target.value} placeholder="inform a senha"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Confirmar Senha</Label>
                        <Input type="password" id="passwordCon" onChange={e => this.passwordCon = e.target.value} placeholder="confirm a senha"></Input>
                    </FormGroup>
                    <Button color="primary" block onClick={this.submit}>Entrar</Button>
                </Form>
            </div>
        )
    }
}