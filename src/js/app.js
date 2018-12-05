import React from 'react';
import Header from './header';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="App">
                <Header label="Hello World!!"/>
            </div>
        );
    };

}

export default App;