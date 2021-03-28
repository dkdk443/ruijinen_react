import React from 'react';
import ReactDOM from 'react-dom';
import MainHeader from '../js/components/mainHeader/MainHeader';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Friends from './Friends';
import Start from './Start';
import Questions from './questions';
import TypeResult from './TypeResult';
import Login from './Login';
import Register from './Register';


function App() {
    return (
        <>
            <BrowserRouter>
                <>
                    <Switch>
                        <Route path="/" exact component={Start} />
                        <Route path="/questions" exact component={Questions} />
                        <Route path="/friends" exact component={Friends} />
                        <Route path="/result" exact component={TypeResult}></Route>
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="/register" exact component={Register}></Route>
                    </Switch>
                </>
            </BrowserRouter>
        </>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
