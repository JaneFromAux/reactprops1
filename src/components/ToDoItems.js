const ToDoItems = (props) => {
    return (
        <li>
            <img src={props.iconCheck} alt="check" />
            {props.task}
            <img src={props.iconTask} alt="gym" />
        </li>
    );
}

export default ToDoItems;