import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import RecipeEdit from "./pages/RecipeEdit.js";
import AddNewRecipe from "./pages/AddNewRecipe.js";
import RecipePage from "./pages/RecipePage.js";
import SignUp from "./pages/SignUp.js";
import UserPage from "./pages/UserPage.js";
//import requireAuth from "./utils/requireAuth";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/recipeedit/:id" component={RecipeEdit} />
              <Route exact path="/recipe/:id" component={RecipePage} />
              <Route exact path="/newrecipe" component={AddNewRecipe} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/userpage" component={UserPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
