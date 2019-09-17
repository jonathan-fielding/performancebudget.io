import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  button: {
    margin: '0 5px',
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

interface ButtonBarProps {
  showBack: boolean,
  handleBack: any,
  handleSkip: any,
  showNext?: boolean,
  showSkip?: boolean,
  handleNext: any,
  nextText: string,
  loading: boolean,
 }

const ButtonBar: React.FC<ButtonBarProps> = (props) => {
  const classes = useStyles(props);

  function nextClick() {
    if (!props.loading) {
      props.handleNext();
    }
  }

  return (
    <div className={classes.root}>
      {props.showBack ? (
        <Button className={classes.button} onClick={props.handleBack}>
          Back
        </Button>
      ) : ''}

      {props.showSkip ? (
        <Button className={classes.button} color="secondary" onClick={props.handleSkip}>
          Skip
        </Button>
      ) : ''}
      
      {typeof props.showNext === 'undefined' || props.showNext ? (
        <Button className={classes.button}  variant="contained" color="primary" onClick={nextClick}>
          {props.nextText}
          {props.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </Button>
      ) : ''}
    </div>
  );
}

export default ButtonBar;