import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  beta: {
    padding: '10px',
    background: '#ddd',
    textAlign: 'center',
  },
  perfBadger: {
    lineHeight: '40px',
    display: 'flex',
    color: '#fff',
    justifyContent: 'center',
  },
  perfBadgerLogo: {
    paddingLeft: '10px',
  },
  globalHeader: {
    minHeight: '200px',
    textAlign: 'center',
    backgroundColor: '#0275d8',
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    flexDirection: 'column',
  },
  globalHeaderContent: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  globalHeaderDesktop: {
    minHeight: '30vh',
    marginBottom: '30px',
  },
  globalHeaderTitleMobile: {
    color: '#fff',
    fontSize: '2rem',
    marginBottom: '0',
  },
  globalHeaderTitleDesktop: {
    color: '#fff',
    fontSize: '2.5rem',
    marginBottom: '0',
  },
  globalHeaderNavList: {
    listStyle: 'none',
    paddingLeft: 0,
  },
  globalHeaderNavItem: {
    display: 'inline-block',
    padding: '0 20px',
    '& a': {
      color: '#fff',
    }
  },
  nav: {
    overflow: 'hidden',
    background: '#0260b0',
    width: '100%',
  }
}));

const Header: React.FC = (props) => {
  const classes = useStyles(props);
  const matches = useMediaQuery('(min-width:850px)');
  const visibleBetaHeader: boolean = window.location.host === 'beta.performancebudget.io';

  return (
    <div>
      {visibleBetaHeader && <div className={classes.beta}>
        BETA - This version is the internal build used for trying new things, it uses beta services which could be broken/out of sync with this version
      </div>}
      <header className={`${classes.globalHeader} ${matches ? classes.globalHeaderDesktop : ''}`}>
        <div className={classes.globalHeaderContent}>
          <h1 className={matches ? classes.globalHeaderTitleDesktop : classes.globalHeaderTitleMobile}>Performance Budget Calculator</h1> 
          <p className={classes.perfBadger}>
            <span>by </span>
            <a href="https://www.perfbadger.com"><img src="/logo.png" alt="PerfBadger" width="200" height="40" className={classes.perfBadgerLogo} /></a>
          </p>
        </div>

        <nav className={classes.nav}>
          <ul className={classes.globalHeaderNavList}>
            <li className={classes.globalHeaderNavItem}>
              <NavLink to='/' exact activeClassName='global-header__nav-item--active'>Calculator</NavLink>
            </li>
            <li className={classes.globalHeaderNavItem}>
              <NavLink to='/related/' activeClassName='global-header__nav-item--active'>Related reading</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
        