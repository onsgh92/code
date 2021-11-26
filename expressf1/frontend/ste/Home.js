import { Carousel } from 'react-bootstrap'
import React from 'react'

const Home = ({history}) => {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://us.123rf.com/450wm/rrraven/rrraven1606/rrraven160600013/57674915-livraison-de-vecteur-de-livraison-de-d%C3%A9chargement-de-l-homme-bo%C3%AEtes-de-voiture.jpg?ver=6"
      alt="First slide"
      width="900px" height="500px"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/vecteurs-libre/design-entrepot-de-fond_1212-416.jpg"
      alt="Second slide"
      width="900px" height="400px"

    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/vecteurs-libre/stockage-entrepot-concept-vecteur-logistique-expedition-stockage-transport-illustration-livraison-expedition_53562-4658.jpg?size=338&ext=jpg"
      alt="Third slide"
      width="900px" height="500px"

    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<section className="section1">
<h3>
    A propos de nous
BEST DELIVERY a été créée en 2006 et rachetée en 2014   par un groupe d’entreprises spécialisé dans le transport et la logistique  Le capital de la société est de : 400 000,000 TND.
BEST DELIVERY couvre 100% du territoire tunisien via des agences implantées dans 6 gouvernorats.

Plus que 6 millions de livraisons réussies depuis 2010
Plus que 80 employés chevronnés au service des clients
1 entrepôt de 2000 m2  hautement sécurisé
PLUS DE DETAIL 
   </h3>
</section>
        </div>
    )
}

export default Home
