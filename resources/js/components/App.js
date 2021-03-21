import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
       <h1>Hello, React!!</h1>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
