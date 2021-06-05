import './Card.css'

function Card(props){
    //to activate the class names in expense.js and ExpenseItem.js...ie expense-item and expenses.
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;