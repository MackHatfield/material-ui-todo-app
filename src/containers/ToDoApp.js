import React, { Component } from 'react';
import NewTodoMenu from '../components/NewTodoMenu';
import TaskCards from '../components/TaskCards';

import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// const styles = ({ spacing }) => ({
//   root: {
//     margin: '0 auto',
//     height: 'auto',
//     width: spacing.unit * 130
//   },
//   paper: {
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'row',
//     width: '100%',
//     height: '80%'
//   }
// })

class ToDoApp extends Component {
  state = {
    tasks: [
      { title: 'Be Awesome', description: 'Do really cool stuff and be super awesome', id: 'Be_Awesome_234', willDelete: false },
      { title: 'Be Awesome', description: 'Do really cool stuff and be super awesome', id: 'Be_Awesome_243', willDelete: false },
      { title: 'Be Awesome', description: 'Do really cool stuff and be super awesome', id: 'Be_Awesome_327', willDelete: false },
      { title: 'Be Awesome', description: 'Do really cool stuff and be super awesome', id: 'Be_Awesome_980', willDelete: false },
    ]
  }


  removeDeletedTaskFromPage = (id) => {
    const updatedTasks = [...this.state.tasks].map(task => {
      if (task.id === id) {
        task.willDelete = true;
      }
      return task;
    })
    this.setState({ tasks: updatedTasks });
  }

  handleAddTodo = (todo) => {
    const newTasks = [...this.state.tasks].concat(todo);
    this.setState({
      tasks: newTasks
    })
  }

  handleDeleteTodo = (id) => {
    this.removeDeletedTaskFromPage(id);
    setTimeout(() => {
      const updatedTasks = [...this.state.tasks]
        .filter(task => task.id !== id)
      this.setState({ tasks: updatedTasks })
    }, 500)
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <NewTodoMenu addTodo={(newTodo) => this.handleAddTodo(newTodo)} />
        <Paper style={{ display: 'flex', justifyContent: 'center'}}>
          <TaskCards tasks={this.state.tasks} deleteTodo={(id) => this.handleDeleteTodo(id)} />
        </Paper>
      </div>
    );
  }
}

export default ToDoApp;