import './App.css';
import Navbar from  './Components/Navbar';
import Home from './Components/Home';
import AllItems from './Components/AllItems';
import AddItem from './Components/AddItem';
import EditItem from './Components/EditItem';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/itemlist" component={AllItems} exact />
        <Route path="/additem" component={AddItem} exact />
        <Route path="/edit/:id" component={EditItem} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
