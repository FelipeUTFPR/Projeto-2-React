import React, {Component} from 'react'
import {Form, FormGroup,Label,Input, Button, Alert} from 'reactstrap'

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

export default class Register extends Component{

    constructor(props){
        super(props)
        
        this.state = {
            message : this.props.location.state?this.props.location.state.message:'',
            email:'',
            password: '',
            passwordCon: '',
            errors: {
                email:'',
            password: '',
            passwordCon: '',

            }
            
            

        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { id, value } = event.target;
        let errors = this.state.errors;
    
        switch (id) {
         
          case 'email': 
            errors.email = 
            value.length < 3
            ? 'Email deve ter mais de três caracteres!'
            : '';
            break;
          case 'password': 
            errors.password = 
            value.length < 3
            ? 'A senha deve ter mais de três caracteres!'
                : '';
            break;
            case 'passwordCon': 
            errors.passwordCon = 
            value.length < 3
            ? 'A Senha deve ter mais de três caracteres!'
                : '';
            break;
          default:
            break;
        }
    
        this.setState({errors, [id]: value});
        console.log(errors)
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          console.info('Valid Form')
        }else{
          console.error('Invalid Form')
        }
      }

    submit= () => {

        const email = this.state.email;
        const password = this.state.password;
        const passwordCon = this.state.passwordCon;
        const valid = this.validate(email,password,passwordCon);
        if(valid.length >0){
         
            this.setState({message:valid})

            return;
        }

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
        throw new Error("Erro 400 - Não foi possível realizar o cadastro");
        
    })
    .then(token => {
        localStorage.setItem('token',token)  
        window.location.reload(false);
        
    })
    .catch(e => {
        this.setState({message:e.message});
    })}

    validate(email,password,passwordCon){
        
        let erro = '';

        if(password != passwordCon){
            erro += 'As senhas não conferem\n';
        }

        
        if(password.length <3 || email.length <3 || passwordCon.length <3){
            erro += 'A quantidade de caracteres deve ser maior que 3\n';
        }

        

        // validar email
        

        

        return erro;
        
    }

    

        


    render(){
        const {errors} = this.state;
        return(
            <div className="col-md-6 offset-md-3" >
                
                <hr className="my-3"/>
                <h1>Registre-se</h1>
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" id="email" onChange={e => this.email = e.target.value} placeholder="inform seu e-mail" onChange={this.handleChange} noValidate></Input>
                        {errors.email.length > 0 && 
                <span className="error">{errors.email}</span>}
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="password">Senha</Label>
                        <Input type="password" id="password" onChange={e => this.password = e.target.value} placeholder="inform a senha" onChange={this.handleChange} noValidate></Input>
                        {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="password">Confirmar Senha</Label>
                        <Input type="password" id="passwordCon" onChange={e => this.passwordCon = e.target.value} placeholder="confirm a senha" onChange={this.handleChange} noValidate></Input>
                        {errors.passwordCon.length > 0 && 
                <span className='error'>{errors.passwordCon}</span>}
                    </FormGroup>
                    
                    <Button color="primary" block onClick={this.submit}>Entrar</Button>
                    {
                        this.state.message !==''? (
                        <Alert color="danger" className="text-center">{this.state.message}</Alert> 
                        ): ''
                        
                    }
                </Form>
            </div>
        )
    }
}