import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Navbar from "react-bootstrap/Navbar"

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home"><h1>BEST DELIVERY</h1>   <h5>espace client </h5></Navbar.Brand>
            <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Link className="link" to="/" >Home</Link>
            <Link className="link" to="/recherchecommade" >Recherche Commande</Link>
            <Link className="link" to="/SuivideVentes" >Suivi de Ventes</Link>

            <Link className="link" to="/creefacture" >Facture</Link>

            </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
