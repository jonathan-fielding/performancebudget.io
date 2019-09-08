import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    overflow: 'hidden',
    marginTop: '40px',
  },
}));

const Footer: React.FC = (props) => {
  const classes = useStyles(props);

  return (
    <footer className={classes.root}>
      <p>&copy; Copyright Jonathan Fielding <a href="https://www.twitter.com/jonthanfielding">@jonthanfielding</a> </p>
    </footer>
  );
}

export default Footer;