import React from 'react';
import TodoCard from './card';

export default class TodoList extends React.Component{
    render(){
        const {todoList} = this.props;
        return(
            // <table>
            //     <thead>
            //         <tr>
            //             <th>Title</th>
            //             <th>Description</th>
            //             <th>操作</th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         {
            //             todoList.map((todo, i)=>(
            //                 <tr key={i}>
            //                     <td>{todo.title}</td>
            //                     <td>{todo.description}</td>
            //                     <td>
            //                         <input type='button' value="削除" onClick={()=>this.props.handleDelete(i)} />
            //                     </td>
            //                 </tr>
            //             ))
            //         }
            //     </tbody>
            // </table>
            <div>
                {todoList.map((todo,i)=>(
                    <TodoCard
                    key={i}
                    title={todo.title}
                    description={todo.description}
                    handleDelete={this.props.handleDelete}/>
                ))}
            </div>
        );
    }
}