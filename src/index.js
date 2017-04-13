import {render} from 'react-dom';

// Production_ENV = HashRouter
// Development_ENV = BrowserRouter
    // react router backup with server side routing
    // ref: http://stackoverflow.com/.../client-routing-using-react-router-and-server-side-routing
import {HashRouter as Router, Route, Link} from 'react-router-dom';

// Css
import styles from './css/styles.scss';

// Components
import Home from './components/home';
import Work from './components/work';
import About from './components/about';
import Contact from './components/contact';

render(
    <Router>
        <div className='container'>
            <nav id='nav' className='fixed-nav-bar'>
                <div id='menu' className='menu flexitem-between'>
                    <ul className='nav-container--links'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/work'}>Work</Link></li>
                    </ul>
                    <div className='branding'>
                        <img src='img/logo.png' alt='branding'></img>
                    </div>
                    <ul className='nav-container--links'>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
            </nav>

            <div className='content-container'>
                <Route exact={true} path='/' component={Home} />
                <Route path='/work' component={Work} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </div>
        </div>
    </Router>
    , document.getElementById('app')
);
