import CategoriesPage from "./pages/CategoriesPage";
import NewsDetails from "./pages/NewsDetails";
import NewsListPage from "./pages/NewsListPage";
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/">
          <CategoriesPage />
        </Route>
        <Route path="/:category">
          <NewsListPage />
        </Route>
        <Route path="/news-details">
          <NewsDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
