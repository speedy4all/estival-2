import React from 'react';
import { Input, Form, FormGroup, Label, Button } from 'reactstrap';

export class Filter extends React.Component {
    


    render() {
        return (
            <Form onSubmit={() => {alert("submit")}}>
            <FormGroup>
              <Label for="exampleSelect">Clasificare dupa stele</Label>
              <Input type="select" name="Recenzii">
                <option>*</option>
                <option>**</option>
                <option>***</option>
                <option>****</option>
                <option>*****</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Distanta fata de centru</Label>
              <Input type="select" name="distance" >
                <option>500m</option>
                <option>1km</option>
                <option>2-5km</option>
                <option>5-10km</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Facilitati</Label>
              <Input type="select" name="facilitati">
                <option>parcare</option>
                <option>mic dejun</option>
                <option>restaurant</option>
                <option>sala de jocuri</option>
                <option>sala de fitness</option>
                <option>accepta animale de companie</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Mese</Label>
              <Input type="select" name="mealType">
                <option>mic dejun</option>
                <option>toate mesele incluse</option>
                <option>mic dejun si cina incluse</option>
                <option>self catering</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Tipuri de pat preferat</Label>
              <Input type="select" name="bedTypes">
                <option>paturi twin</option>
                <option>pat double</option>
              </Input>
            </FormGroup>
          <Button type="submit">Submit</Button>
          </Form>
        )
    }
}

export default Filter;
