import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  error: {
    background: '#ffb1b1',
    display: 'inline-block',
    padding: '10px 15px',
    margin: '20px 0',
    border: '1px solid red',
  }
}));

interface ErrorMessageProps {
  display?: boolean,
 }

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const display = typeof props.display === 'boolean' ? props.display : true;
  const classes = useStyles(props);

  if (display) {
    return (
      <div className={classes.root}>
        <p className={classes.error}>{props.children}</p>
      </div>
    );
  } else {
    return (
      <div>
      </div>
    )
  }
}

export default ErrorMessage;