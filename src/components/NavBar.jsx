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
        this.changeSearchValue = this.changeSearchValue.bind(this);
        this.state = {
            isOpen: false,
            searchValue: ""
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    changeSearchValue(e) {
      this.setState ({
        searchValue: e.target.value
      })
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
                    <Input placeholder="evenimente" onChange={this.changeSearchValue} />
                        <InputGroupAddon addonType="append">
                            <Button color="info" onClick={()=>{this.props.searchEvent(this.state.searchValue)}}>Cauta</Button>{' '}
                        </InputGroupAddon>
                    </InputGroup>
                  </NavItem>
                  <NavItem>
                    <Button onClick={this.props.addNewEvent}>New Event</Button>
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
                      <Button onClick={this.props.showLogInForm}>LogIn</Button>
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
