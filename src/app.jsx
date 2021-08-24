
import './app.css';
import Habits from './components/habits';
import React,{Component} from 'react';
import Navbar from './components/navbar';
class App extends Component {
  state={
    habits:[{id:1,name:'Reading',count:0},
            {id:2,name:'Running',count:0},
            {id:3,name:'Coding',count:0},
        ],
};  

handleIncrement = (habit)=>{
  const habits = this.state.habits.map(item=>{
    if(item.id === habit.id){
      return {...habit,count:habit.count+1};
    }
    return item;
  });
  this.setState({habits});
};
handleDecrement = (habit)=>{
  const habits = this.state.habits.map( ele => {
    if(ele.id===habit.id){
      const count = habit.count-1;
      return {...habit,count:count<0?0:count};
    }
    return ele;
  });
  this.setState({habits});
};
handleDelete =(habit)=>{
  const habits = this.state.habits.filter(item=>item.id!==habit.id);
  this.setState({habits});
};
handleAdd = (name)=>{
  const habits =[...this.state.habits,{id:Date.now(),name,count:0}];
  this.setState({habits});
};
handleReset = ()=>{
  const habits = this.state.habits.map((ele)=>{
    if(ele.count!==0) return {...ele,count:0};
    return ele;
  });
  this.setState({habits});
};
  render() {
    return (
      <>
      <Navbar
        totalCount={this.state.habits.filter((ele)=>ele.count>0).length}/>
      <Habits
      habits={this.state.habits}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}
      onAdd={this.handleAdd}
      onReset={this.handleReset}/>
      </>
    );
  }
}

export default App;
