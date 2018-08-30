import React, { Component } from 'react';
import _ from 'lodash';

import AddCircleButton from './UI/AddCircleButton';

import {
  TextField,
  Button,
  Slide,
  Typography
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';

const styles = ({ spacing }) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: spacing.unit,
    alignItems: 'center'
  },
  field: {
    marginRight: spacing.unit * 3,
  },
  button: {
    marginRight: spacing.unit * 3,
    minHeight: 57
  },
  menu: {
    zIndex: 1,
    position: 'relative'
  },
  title: {
    marginRight: spacing.unit,
    letterSpacing: '0.25em',
    paddingRight: '1em',
    borderRight: '0.05em solid black'
  }
})

class NewTodoMenu extends Component {
  state = {
    title: '',
    description: '',
    id: '',
    showMenu: false
  }

  handleToggleMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }))
  }

  setTitle = (event) => {
    this.setState({ title: event.target.value })
  }

  setDescription = (event) => {
    this.setState({ description: event.target.value });
  }

  render() {
    const { showMenu } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        
        <Typography className={classes.title} variant="title">
          The Obligatory TodoApp
        </Typography>
        <Button onClick={this.handleToggleMenu} className={classes.button} color="primary">
          <EditIcon />
        </Button>
        <Slide direction="left" in={showMenu} mountOnEnter unmountOnExit>
          <form className={classes.menu}>
            <TextField
              className={classes.field}
              id="title"
              label="Title"
              value={this.state.title}
              onChange={this.setTitle}
            />
            <TextField
              className={classes.field}
              id="description"
              label="Description"
              value={this.state.description}
              onChange={this.setDescription}
            />
            <AddCircleButton clicked={() => this.props.addTodo({
              title: this.state.title,
              description: this.state.description,
              id: _.uniqueId(`${this.state.title}_`),
              willDelete: false
            })}
            />
          </form>
        </Slide>
      </div>
    )
  }
}

export default withStyles(styles)(NewTodoMenu);