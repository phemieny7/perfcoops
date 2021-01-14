import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Navbar from './component/Navbar/navbar.component'
function App() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path ="/" component={Home}/>
            </Switch>
           
        </div>
     );
}

export default App;
