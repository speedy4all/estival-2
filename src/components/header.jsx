import React from 'react';
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
    }} >Help!
            </Button>{' '}
</Navbar>