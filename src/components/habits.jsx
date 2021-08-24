import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  
    handleIncrement = (habit)=>{
       this.props.onIncrement(habit);
    };
    handleDecrement = (habit)=>{
        this.props.onDecrement(habit);
    };
    handleDelete =(habit)=>{
        this.props.onDelete(habit);
    };
    handleAdd = (name)=>{
        this.props.onAdd(name);
    };
    handleReset = () =>{
        this.props.onReset();
    };
    render() {

        return (
            <>
            <HabitAddForm
            onAdd={this.handleAdd}/>
            <ul>
                {
                    this.props.habits.map(habit =>(
                        <Habit key={habit.id} habit={habit}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}/>
                    ))
                }
            </ul>
            <button onClick={this.handleReset}>Reset All</button>
            </>

        );
    }
}

export default Habits;