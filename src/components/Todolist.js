import React from 'react';

export default function Todolist(props){
    const{todos,delRow}=props;
    return(
        <div>
            <table>
                <tbody>
                <tr>
                <th>Date</th>
                <th>Description</th>
                </tr>
                {todos.map((todo,index)=>
                    <tr key={index}>
                    <td>{todo.date}</td>
                    <td>{todo.desc}</td>
                    <td><button onClick={
                    ()=> {delRow(index)}
                }>Delete</button></td>
                </tr>
            )
            }
                </tbody>
            </table>
        </div>
    )
}