import React from 'react';
import { Navbar, NavbarBrand, InputGroup, InputGroupAddon, InputGroupText, Input, } from 'reactstrap';
import About from './About';

export class Header extends React.Component {
 render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">tripME</NavbarBrand>
                <InputGroup >
                    <InputGroupAddon addonType="prepend">search</InputGroupAddon>
                    <Input placeholder="destinatie" />
                    <Button color="info" onClick={() => {
                        props.switchPage("About");
                    }} >enter</Button>
                </InputGroup>
                <Button className="button1" onClick={() => {
                    props.switchPage("About");
                 }} Help!
                                </Button>{' '}
            </Navbar>
            )
        }
    }
    
    export default Header;