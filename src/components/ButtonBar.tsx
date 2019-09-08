import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  button: {
    margin: '0 5px',
  }
}));

interface ButtonBarProps {
  showBack: boolean,
  handleBack: any,
  showNext?: boolean,
  handleNext: any,
  nextText: string,
 }

const ButtonBar: React.FC<ButtonBarProps> = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {props.showBack ? (
          <Button className={classes.button} onClick={props.handleBack}>
            Back
          </Button>
        ) : ''}
        
        {typeof props.showNext === 'undefined' || props.showNext ? (
          <Button className={classes.button}  variant="contained" color="primary" onClick={props.handleNext}>
            {props.nextText}
          </Button>
        ) : ''}
    </div>
  );
}

export default ButtonBar;