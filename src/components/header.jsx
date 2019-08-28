import React from 'react';
import { Navbar, NavbarBrand, InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';


export class Header extends React.Component {
 render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">tripME</NavbarBrand>
                <InputGroup >
                    <InputGroupAddon addonType="prepend">search</InputGroupAddon>
                    <Input placeholder="destinatie" />
                    <Button color="info" onClick={() => {
                        this.props.switchPage("About");
                    }} >enter</Button>
                </InputGroup>
                <Button className="button1" onClick={() => {
                    this.props.switchPage("About");
                 }} >Help!
                                </Button>{' '}
            </Navbar>
            )
        }
    }
    
    export default Header;