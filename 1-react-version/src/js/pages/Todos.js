import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";


export default class Todos extends React.Component {
    constructor() {
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: TodoStore.getAll(),
            new_text: ''
        };
    }

    componentWillMount() {
        TodoStore.on("change", this.getTodos);
    }

    componentWillUnmount() {
        TodoStore.removeListener("change", this.getTodos);
    }

    getTodos() {
        this.setState({
            todos: TodoStore.getAll(),
        });
    }

    createTodo() {
        console.log(this.state.new_text);
        TodoActions.createTodo(this.state.new_text);
        this.state.new_text = ''
    }

    handleChange(event) {
        this.setState({new_text: event.target.value});
    }

    render() {
        const {todos} = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo}/>;
        });

        return (
            <div>
                <input type="text" value={this.state.new_text} onChange={this.handleChange.bind(this)} />
                <button onClick={this.createTodo.bind(this)}>Add Reminder</button>
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        );
    }
}
