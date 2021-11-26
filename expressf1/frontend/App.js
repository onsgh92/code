import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './ste/recherchecommade';
import Products from './admin/Products';
import Books from './ste/creefacture';
import Shoes from './ste/SuivideVentes';
import creefacture from './ste/creefacture';
import recherchecommande from './ste/recherchecommade';
import SuivideVentes from './ste/SuivideVentes';
import connexion from './connexion';
import inscription from './inscription';
function App() {
  return (
    <div className="App">
      
      <Switch>
      <Route path="/" component={connexion} />

     
      <Route path="/inscription" component={inscription} />

      <Route path="/about" component={About} />
      
      <Route path="/products/books" component={Books} />
      <Route path="/products/shoes" component={Shoes} />
     
      <Route path="/creefacture" component={creefacture} />
      <Route path="/recherchecommade" component={recherchecommande} />
      <Route path="/suivideventes" component={SuivideVentes} />

     


      </Switch>
    </div>
  );
}

export default App;
