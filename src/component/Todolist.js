import React, {useState} from 'react';
import Todotable from './Todotable';

function Todolist(){

    const [todo, setTodo] = useState({
        description: '',
        date: '',
        priority: ''
        });
 
        const [todos, setTodos] = useState([]);

    const handleAddTodo = () =>{
        setTodos([todo, ...todos]);
        setTodo({description: '', date: ''});
       
    }

    const handleDeleteTodo = (row) =>{
        setTodos(todos.filter((todo, index) => row !== index));
    }

    return(
        <div>
            <h1>My Todos</h1>
            <input
                placeholder="Description"
                value={todo.description}
                onChange={e =>setTodo({...todo, description: e.target.value})}
            />
            <input
                placeholder="Priority"
                value={todo.priority}
                onChange={e =>setTodo({...todo, priority: e.target.value})}
            />
            <input
                placeholder="Date"
                value={todo.date}
                type= "date"
                onChange={e =>setTodo({...todo, date: e.target.value})}
            />
            
            <button onClick={handleAddTodo} >Add Todo</button>
            
            <Todotable todos={todos} deleteTodo={handleDeleteTodo}/>
        </div>
    );
}

export default Todolist;