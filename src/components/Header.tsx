import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  beta: {
    padding: '10px',
    background: '#ddd',
    textAlign: 'center',
  },
  globalHeader: {
    minHeight: '200px',
    textAlign: 'center',
    backgroundColor: '#0275d8',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  globalHeaderDesktop: {
    minHeight: '30vh',
    marginBottom: '30px',
  },
  globalHeaderTitleMobile: {
    color: '#fff',
    fontSize: '2rem',
  },
  globalHeaderTitleDesktop: {
    color: '#fff',
    fontSize: '2.5rem',
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
        <div>
          <h1 className={matches ? classes.globalHeaderTitleDesktop : classes.globalHeaderTitleMobile}>Performance Budget Calculator</h1>
          <nav className='global-header__nav'>
            <ul className={classes.globalHeaderNavList}>
              <li className={classes.globalHeaderNavItem}>
                <NavLink to='/' exact activeClassName='global-header__nav-item--active'>Calculator</NavLink>
              </li>
              <li className={classes.globalHeaderNavItem}>
                <NavLink to='/related/' activeClassName='global-header__nav-item--active'>Related reading</NavLink>
              </li>
            </ul>
          </nav>
        </div>
    </header>
    </div>
  );
}

export default Header;
        