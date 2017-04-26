import {data} from '../store/data';

class Home extends React.Component {
    render() {
        return (
            <div id='home'>
                <div className='banner'>
                    <h1 className='grey-text text-lighten-5'>BeCreative</h1>
                </div>

                <div className='container'>
                    {/* mission statement */}
                    <div className='row'>
                        <div className='mission'>
                            <div className='col s12 m6'>
                                <div className='subtext-container'>
                                    <p className='subtext-title gold-text text-base'>{data.mission.subtext.toUpperCase()}</p>
                                    <hr className='style1 black'></hr>
                                </div>
                                <h3 className='grey-text text-darken-4'>{data.mission.title}</h3>
                                <p>{data.mission.description}</p>
                            </div>

                            <div className='col s12 m6'>
                                <img src='../assets/img/office.jpg' alt='feature'/>
                            </div>
                        </div>
                    </div>
                    {/* end mission statement */}

                    <div className='row'>
                        <div className='feature-proj'></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
