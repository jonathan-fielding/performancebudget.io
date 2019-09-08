import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 20px',
  },
}));

const GridContainer: React.FC = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {props.children}
    </div>
  );
}

export default GridContainer;
        