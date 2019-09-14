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
      <a href='https://ko-fi.com/M4M513HJF' target='_blank' rel="noopener noreferrer">
        <img height='36' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=2' alt='Buy Me a Coffee at ko-fi.com' />
      </a>
      <p>&copy; Copyright Jonathan Fielding <a href="https://www.twitter.com/jonthanfielding">@jonthanfielding</a> </p>
    
      <script type='text/javascript' src='https://ko-fi.com/widgets/widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Support Me on Ko-fi', '#46b798', 'M4M513HJF');kofiwidget2.draw();</script> 
    </footer>
  );
}

export default Footer;