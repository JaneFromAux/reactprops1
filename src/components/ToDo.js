import ToDoItems from './ToDoItems'

let data = [
    {
        iconCheck: 'img/check.png',
        task: "Hit the gym",
        iconTask: 'img/gym.png'
    },
    {
        iconCheck: 'img/check.png',
        task: "Pay bills",
        iconTask: 'img/bill.png'
    },
    {
        iconCheck: 'img/doing.png',
        task: "Meet George",
        iconTask: 'img/dance.png'
    },
    {
        iconCheck: 'img/doing.png',
        task: "Buy eggs",
        iconTask: 'img/eat.png'
    },
    {
        iconCheck: 'img/no.png',
        task: "Read a book",
        iconTask: 'img/book.png'
    },
    {
        iconCheck: 'img/no.png',
        task: "Hit the gym",
        iconTask: 'img/organize.png'
    }
]

const ToDo = () => {
    return (
        <div>
            <h1 style={{ fontSize: '3.8rem' }}><span style={{ fontSize: '6.5rem' }}>T</span>o do list</h1>
            <ul>
                <ToDoItems
                    iconCheck={data[0].iconCheck}
                    task={data[0].task}
                    iconTask={data[0].iconTask}
                />
                <ToDoItems
                    iconCheck={data[1].iconCheck}
                    task={data[1].task}
                    iconTask={data[1].iconTask}
                />
                <ToDoItems
                    iconCheck={data[2].iconCheck}
                    task={data[2].task}
                    iconTask={data[2].iconTask}
                />
                <ToDoItems
                    iconCheck={data[3].iconCheck}
                    task={data[3].task}
                    iconTask={data[3].iconTask}
                />
                <ToDoItems
                    iconCheck={data[4].iconCheck}
                    task={data[4].task}
                    iconTask={data[4].iconTask}
                />
                <ToDoItems
                    iconCheck={data[5].iconCheck}
                    task={data[5].task}
                    iconTask={data[5].iconTask}
                />


            </ul>
            {/* <ul style={{ listStyle: 'none', fontWeight: 'bold', fontSize: '2rem', marginLeft: '6vw', marginTop: '3vh' }}>
                <li style={{ textDecoration: 'line-through' }}>
                    <img src={data[0].iconCheck} alt="check" />
                    {data[0].task}
                    <img src={data[0].iconTask} alt="gym" />
                </li>
                <li style={{ textDecoration: 'line-through' }}>
                    <img src={data[1].iconCheck} alt="check" />
                    {data[1].task}
                    <img src={data[1].iconTask} alt="bill" />
                </li>
                <li style={{ backgroundColor: 'lightBlue' }}>
                    <img src={data[2].iconCheck} alt="doing" />
                    {data[2].task}
                    <img src={data[2].iconTask} alt="dance" />
                </li>
                <li style={{ backgroundColor: 'lightBlue' }}>
                    <img src={data[3].iconCheck} alt="doing" />
                    {data[3].task}
                    <img src={data[3].iconTask} alt="eat" />
                </li>
                <li style={{ textDecoration: 'underline' }}>
                    <img src={data[4].iconCheck} alt="no" />
                    {data[4].task}
                    <img src={data[4].iconTask} alt="book" />
                </li>
                <li style={{ textDecoration: 'underline' }}>
                    <img src={data[5].iconCheck} alt="no" />
                    {data[5].task}
                    <img src={data[5].iconTask} alt="organize" />
                </li>
            </ul> */}
        </div>
    );
}

export default ToDo;