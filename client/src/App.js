import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import AddNewRecipe from "./pages/AddNewRecipe.js";
import RecipePage from "./pages/RecipePage.js";
import SignUp from "./pages/SignUp.js";
import UserPage from "./pages/UserPage.js";



  class App extends Component {

    render() {
      return (
        <div>
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/newrecipe" component={AddNewRecipe} />
                <Route exact path="/recipe/:id" component={RecipePage} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/userpage" component={UserPage} />
              </Switch>
            </div>
          </Router>
        </div>
      )
    }
  }



export default App;
