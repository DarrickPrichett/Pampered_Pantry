import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Paper from "@mui/material/Paper";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";

import { StoreProvider } from "./utils/GlobalState";
import MyRecipes from "./pages/MyRecipes";
import AddRecipe from "./pages/AddRecipe";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Paper sx={{ width: '75%' , mx: "auto"}} elevation={3}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/recipes/:id' component={Detail} />
              <Route exact path='/MyRecipes' component={MyRecipes} />
              <Route exact path='/AddRecipe' component={AddRecipe} />
              <Route component={NoMatch} />
            </Switch>
            </Paper>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
