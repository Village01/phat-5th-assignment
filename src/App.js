import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './component/head.js'
import RouterURL from './component/routerURL'
import Foot from './component/foot.js'
function App() {
    return (
        <div className="App">
            <Head />
            <RouterURL />
            <Foot />
        </div>
    )
}

export default App;
