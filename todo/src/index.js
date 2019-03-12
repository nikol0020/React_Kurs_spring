import React from 'react';
import ReactDOM from 'react-dom';

const todoHello = React.createElement(
    'h1',
    null,
    'Hello World!');

ReactDOM.render(todoHello, document.getElementById('title'));



class Button extends React.Component {
    render() {
        return <button>{this.props.label}</button>;
    };
}

ReactDOM.render(<Button label="Save"/>, document.getElementById('btn'));


class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Amsterdam'
        }
    }

    render() {

        return (
            <div>
                <h2>
                    {this.state.city}
                </h2>
                <p>User Name: {this.props.name}</p>
                <p>User Age: {this.props.age}</p>
            </div>
        );
    }
}

ReactDOM.render(<Main name='Nik' age='28'/>, document.getElementById('pure'));



const TodoList = () => {
    const items = ['Install Express', 'Create React Elements'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return (
        <h1>Todo App</h1>
    );
};

const AppInput = () => {
    return (
        <input type="text" placeholder=" enter your name"/>
    );
};


const App = () => {
    return (
        <div>
            <AppHeader/>
            <AppInput/>
            <TodoList/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

