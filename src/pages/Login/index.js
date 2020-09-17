import React, {Component} from 'react'
import {Form, FormGroup,Label,Input, Button, Alert} from 'reactstrap'



export default class Login extends Component{

    constructor(props){
        super(props)
        console.log(this.props);
        this.state = {
            message : this.props.location.state?this.props.location.state.message:'',

        };
    }

    signIn = () => {


        const data = { email: this.email, password: this.password, conpassword: this.conpassword };


        const requestInfo = {
            method:'POST',
            body:JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };
        fetch('https://reqres.in/api/login', requestInfo)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        
    })
    .then(token => {
        localStorage.setItem('token',token);
        this.props.history.push("/admin");
        return;
    })
    
    }

    

    render(){
        return(
            <div className="col-md-6 offset-md-3" >
                <h1>Login</h1>
                <hr className="my-3"/>
                
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" id="email" onChange={e => this.email = e.target.value} placeholder="inform seu e-mail"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Senha</Label>
                        <Input type="password" id="password" onChange={e => this.password = e.target.value} placeholder="inform a senha"></Input>
                    </FormGroup>
                    
                    <Button color="primary" block onClick={this.signIn}>Entrar</Button>
                </Form>
            </div>
        )
    }
}
