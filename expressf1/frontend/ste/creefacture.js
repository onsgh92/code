import React from 'react'
import {Col,Form,Row,Button,InputGroup,FormControl} from 'react-bootstrap'

const creefacture = () => {
    return (
        <div>
            <Form>
  <Row className="mb-3">
      <h1>FACTURE </h1>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>numero facture</Form.Label>
      <Form.Control type="number" placeholder="numero facture" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>nom client </Form.Label>
      <Form.Control type="text" placeholder="nom client " />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label> téléphone </Form.Label>
      <Form.Control type="number" placeholder="numéro téléphone" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>
<Row>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>référence Article </Form.Label>
      <Form.Control type="text" placeholder="référence" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Prix </Form.Label>
      <>
  <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <InputGroup.Text>0.00</InputGroup.Text>
    <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
  </InputGroup>
   
</>    </Form.Group>
    </Row>
  </Row>
  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Quantité </Form.Label>
      <Form.Control type="Number" placeholder="Quantité" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Nombre de copier  </Form.Label>
 </Form.Group>
<h3>
  <Button variant="primary" type="submit">
   save
  </Button>
  </h3>
</Form>
        </div>
    )
}

export default creefacture
