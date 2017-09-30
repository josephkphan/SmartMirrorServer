import dispatcher from "../dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function reloadTodos(new_todo) {
    // axios("http://someurl.com/somedataendpoint").then((data) => {
    //   console.log("got the data!", data);
    // })
    dispatcher.dispatch({type: "FETCH_TODOS"});
    dispatcher.dispatch({
        type: "RECEIVE_TODOS", todos: [
            {
                id: 1,
                text: new_todo,
                complete: false
            },
            {
                id: 6262627272,
                text: "Hug Wife",
                complete: true
            },
        ]
    });
}
