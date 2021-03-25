import React from 'react';
import ReactDOM from 'react-dom';
import MainHeader from '../js/components/mainHeader/MainHeader';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Friends from './Friends';
import Start from './Start';
import Questions from './questions';


function App() {
    return (
        <>
            <BrowserRouter>
                <>
                    <Switch>
                        <Route path="/" exact component={Start} />
                        <Route path="/questions" exact component={Questions} />
                        <Route path="/friends" exact component={Friends} />
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
