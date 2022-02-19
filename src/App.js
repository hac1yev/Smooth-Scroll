import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './components/SignIn/SignIn'

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/signin' component={SignIn} />
            </Switch>
        </Router>
    )
}

export default App