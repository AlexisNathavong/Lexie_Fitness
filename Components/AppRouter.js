import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Components
import WelcomePage from './WelcomePage';
import AboutPage from './AboutPage';
import ResourcePage from './ResourcePage';

const AppRouter = () => {
    return (
        <Router>
            <div className='app-router'>
                <Link to='/'>Home</Link>
                <Link to='/about-page'>About</Link>
                <Link to='/resources-page'>Resources</Link>

            </div>

            <Routes>
                <Route exact path='/' component={WelcomePage} />
                <Route path='/about-page' component={AboutPage} />
                <Route path='/resources-page' component={ResourcePage} />
            </Routes>
        </Router>
    )
}

export default AppRouter;