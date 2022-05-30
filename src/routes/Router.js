import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Main from "./Main";
import Detail from "./Detail";
import Login from "./Login";
import Register from "./Register";
import Write from "./Write";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/register">
                    <Register></Register>
                </Route>
                <Route path="/detail/:id">
                    <Detail></Detail>
                </Route>
                <Route path="/write/:id">
                    <Write></Write>
                </Route>
                <Route path="/write">
                    <Write></Write>
                </Route>
                <Route path="/" exact>
                    <Main></Main>
                </Route>
                <Route>
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;