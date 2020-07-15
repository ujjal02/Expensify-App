import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({
            description
        }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({
            note
        }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if(!amount || amount.match(/^\d+(\.\d{0,2})?$/)){
            this.setState(() => ({
                amount
            }))
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({
                createdAt
            }))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            calendarFocused: focused
        }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: 'Please provide description and amount'
            }))
        } else {
            this.setState(() => ({
                error: ''
            }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render (){
        return (
            <div className="form-container">
                {this.state.error && <p className="error">{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                            className="form-control form-control-lg" 
                            type="text"
                            placeholder="Description"
                            autoFocus
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control form-control-lg" 
                            type="text"
                            placeholder="Amount"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                    </div>
                    <div className="form-group">
                        <SingleDatePicker 
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={(day) => false}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control form-control-lg"
                            placeholder="Add a not for your Expense (optional)"
                            value={this.state.note}
                            onChange={this.onNoteChange}
                        >
                        </textarea>
                    </div>
                    
                    <button className="btn btn-primary">Add Expense</button>
                </form>
            </div>
        )
    }
}