import React from 'react';

const priorityStyle = (priority) => {
    switch(priority) {
        case "High":
            return{backgroundColor :"red"}
        case "Medium":
            return{backgroundColor :"orange"}
        case "Low":
            return{backgroundColor :"green"}
        default:
            return{};
}

}
const Task = (props) => {
    
    return (
          <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority" style={priorityStyle(props.priority)}>
                {props.priority}</p>

            <button className="doneButton" onClick={props.markDone}>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>

        </div>
    )
}

export default Task;
