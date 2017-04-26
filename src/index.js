import {render} from 'react-dom';

// Production_ENV = HashRouter
// Development_ENV = BrowserRouter
// react router backup with server side routing
// ref: http://stackoverflow.com/.../client-routing-using-react-router-and-server-side-routing
import {HashRouter as Router, Route} from 'react-router-dom';

// CSS
import styles from './assets/styles/main.scss';
// React animations
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

// Routes from ./pages
import Home from './pages/home';
import Work from './pages/work';
import About from './pages/about';
import Contact from './pages/contact';

// Components
import Nav from './components/nav';

import {data} from './store/data';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div id='header' className='white'>
                        <div className='container'>
                            <div className='row' style={{marginBottom: 0}}>
                                <div className='login'>
                                    <h1>{data.title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Nav/>
                    <Route exact={true} path='/' component={Home}/>
                    <Route path='/work' component={Work}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                </div>
            </Router>
        );
    }
}

render(
    <App/>, document.getElementById('app'));
