import React, { Component } from 'react';
import TaskCard from './TaskCard';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
  },
}

class TaskCards extends Component {
  state = {
    tasksRendered: false,
  }

  componentDidMount() { // this is to check if it is alreadying rendered so that a delayed grow of each card only happens on first page load
    console.log('it mounted');
    this.setState({ tasksRendered: true });
  }

  render() {
    const { tasks, deleteTodo, classes } = this.props;
    const { tasksRendered } = this.state;
    let displayInterval = 0;
    return (
      <div className={classes.root}>
        <Grid container alignContent="center">
          {tasks.map((task) => {
            displayInterval += 200;
            return (
              <Grid item key={task.id} id='card'>
                <Grid container>
                  <TaskCard
                    title={task.title}
                    description={task.description}
                    clicked={() => deleteTodo(task.id)}
                    showTime={displayInterval}
                    newCard={tasksRendered}
                    deleteCard={task.willDelete}
                    renderDelay={tasksRendered ? 500 : displayInterval}
                  />
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(TaskCards);