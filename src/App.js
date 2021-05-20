import './App.css';
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import List from "./Components/All/List";
import {GlobalProvider} from "./Contex/GlobalState";
import FormEditAnnoun from "./Components/EditAnnoun/FormEditAnnoun";
import FormAddAnnoun from "./Components/AddAnnoun/FormAddAnnoun";

function App() {

  return (
      <GlobalProvider>
      <Router>
          <Switch>
            <Route exact path='/' component={List}/>
            <Route exact path='/add' component={FormAddAnnoun}/>
            <Route exact path='/edit/:id' component={FormEditAnnoun}/>
          </Switch>
      </Router>
      </GlobalProvider>
  );
}

export default App;
