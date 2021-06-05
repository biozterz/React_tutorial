import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {

    //can only have one root element per return statement, meaning you have to nest the other div's under one root div 
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='.expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>
                <h2>{props.amount}</h2>
                </div>
        </Card> 
    )
}

export default ExpenseItem;