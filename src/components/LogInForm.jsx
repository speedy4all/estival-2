import React, { Component } from 'react';
import{Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

export class LogInForm extends React.Component{
render(){
    return(
        <div>
        <form>
        <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
        </form>
        </div>
    )
}
}

export default LogInForm

