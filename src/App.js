import './App.css';
import React from 'react'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thingList: [
                { id: 1, name: "calculator", description: "A calculator" },
                { id: 2, name: "cell phone", description: "A cell phone" },
            ],
        };
        this.thingCreated = this.thingCreated.bind(this);
    };

    thingCreated(thing) {
        const thingList = [...this.state.thingList, thing];

        thing.id = thingList.length;

        this.setState( {thingList} );
    }

    render() {
        return (
            <div className="App">
                <Header count={this.state.thingList.length} />
                <ThingList thingList={this.state.thingList} thingCreated={this.thingCreated} />
                <Footer />
            </div>
        );
    };
}


function Header(props) {
    return <h2>Number of things: {props.count}</h2>;
}


class ThingList extends React.Component {
    render() {
        return (
            <>
            <ThingForm thingCreated={this.props.thingCreated} />
            <ul>
                {this.props.thingList.map(thing => 
                    <SomeThing key={thing.id} name={thing.name} description={thing.description} /> 
                )}
            </ul>
            </>
        );
    }
}


class ThingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            description:'',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState( {name: event.target.value})
        // handle desription as well
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
        this.props.thingCreated(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Add thing: 
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Add" />
            </form>
        );
    }
}


function SomeThing(props) {
    return <li>{props.name}</li>
}


function Footer(props) {
    return <h2>Footer here</h2>;
}


export default App;
