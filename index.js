//Import the react and reactDOM liabrarie
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';

//create a react component
// const App = ()=>{

//   }

class App extends React.Component{
    constructor(props){
        super(props);

        //This is the only time when we do direct assignment
        this.state = {
            lat : null,
            errorMessage : ''
        };

        
    }

    componentDidMount(){
        //lifecycle method for react componenet 
        //getting user location in componenetDidMount 
        //getting the current lattitude of the user
        window.navigator.geolocation.getCurrentPosition(
            function(position){
                //Caaling setState method
                this.setState({lat : position.coords.latitude});
            }.bind(this),
            function(erro){
                console.log(erro);
                this.setState({errorMessage : erro.message});
            }.bind(this)
        );
    }

    renderContent(){
        if(this.state.lat && !this.state.errorMessage){
            return  (
                <SeasonDisplay lattitude={this.state.lat}></SeasonDisplay>
            );
        }
        if(!this.state.lat && this.state.errorMessage){
            return  (
                <div>
                    Error : {this.state.errorMessage}
                </div>
            );
        }
        return (
                <div class="ui active dimmer">
                    <div class="ui text loader">Loading..</div>
                </div>
        );
    }

    render(){
        return <div>{this.renderContent()}</div>

    }
}
ReactDOM.render(<App/>, document.querySelector('#root'));
