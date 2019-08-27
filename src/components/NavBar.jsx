import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup, 
    InputGroupAddon, 
    InputGroupText, 
    Input, 
    Button
} from 'reactstrap';

export class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Events Brasov</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Acasa</NavLink>
                  </NavItem>
                  <NavItem>
                  <InputGroup>
                    <Input placeholder="evenimente" />
                        <InputGroupAddon addonType="append">
                            <Button color="info">Cauta</Button>{' '}
                        </InputGroupAddon>
                    </InputGroup>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Cont
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Sign in
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Log in
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        )
    }
}

export default NavBar
