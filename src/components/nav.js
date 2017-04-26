import {Link} from 'react-router-dom';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import {data} from '../store/data';

class Nav extends React.Component {
    render() {
        const {title} = this.props;
        const urls = data.urls;
        const transitionOptions = {
            transitionName: 'slide',
            transitionEnterTimeout: 1000,
            transitionLeaveTimeout: 1000
        };

        return (
            <ReactCssTransitionGroup {...transitionOptions}>
                <nav id='nav' className='grey darken-3'>
                    <div id='menu' className='menu flexitem-between'>
                        <ul className='nav-container--links'>
                            {Object.keys(urls).map((key, i) => {
                                return (
                                    <li key={i}>
                                        <Link className='sliding-u-l-r-l' to={`/${urls[key]}`}>{key}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
            </ReactCssTransitionGroup>
        );
    }
}

export default Nav;
