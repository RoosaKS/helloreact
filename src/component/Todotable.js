function Todotable(props){
    return(
        <table>
                <tbody>

                    <tr>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Date</th>
                    </tr>
                    {
                        props.todos.map((todo, index) => 
                        <tr key ={index}>
                            <td>{todo.description}</td>
                            <td>{todo.priority}</td>
                            <td>{todo.date}</td>
                            <td><button onClick={() =>props.deleteTodo(index)}>Done</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
    )
}

export default Todotable;