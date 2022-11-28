import './App.css';
import { Route } from "react-router-dom";
import InitialPage from './components/initialPage/initialPage.jsx';
import Home from './components/home/home.jsx';
import GameDetail from './components/gameDetail/gameDetail';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={InitialPage} />
      <Route exact path="/videogames" component={Home}/>
      <Route exact path="/create"/>
      <Route exact path="/videogames/:id" component={GameDetail} />
    </div>
  );
}

export default App;
