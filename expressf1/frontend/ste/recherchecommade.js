import React from 'react'
import  {Form,  Button,FormControl} from 'react-bootstrap'

const recherchecommande = () => {
    return (
        <div>
             <Form className="d-flex">
               <h1> Rechercher votre Commande</h1>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
        </div>
    )
}

export default recherchecommande