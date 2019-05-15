import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

import JSON from './componentList.json';
import './styles/styles.css';

class App extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Body cmpList={JSON}/>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
