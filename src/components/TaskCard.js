import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Grow
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import { withStyles } from '@material-ui/core/styles';



const styles = ({ spacing }) => ({
  root: {
    minWidth: 200,
    maxWidth: 200,
    minHeight: 200,
    position: 'relative',
    margin: spacing.unit * 4,
    transformOrigin: 'left'
  },
  button: {
    position: 'absolute',
    bottom: '5%'
  }
})

class TaskCard extends Component {

  render() {
    const { classes, title, description, clicked, deleteCard, renderDelay } = this.props;

    return (
      <Grow in={!deleteCard} className={classes.root} timeout={renderDelay}>
        <Card raised>
          <CardContent>
            <Typography variant="headline" gutterBottom>
              {title}
            </Typography>
            <Typography variant="subheading">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={clicked} className={classes.button} variant="contained" color="secondary">
              Delete
            <DeleteIcon />
            </Button>
          </CardActions>
        </Card>
      </Grow>
    )
  }
}

export default withStyles(styles)(TaskCard);
