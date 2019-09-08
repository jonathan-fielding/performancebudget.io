import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Custom components
import Header from './components/Header';
import Footer from './components/Footer';
import GridContainer from './components/GridContainer';

import Calculator from './pages/Calculator';
import RelatedArticles from './pages/RelatedArticles';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue'`,
    fontSmoothing: 'antialiased',
  },
}));

const App: React.FC = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Router>
        <Header />
        <GridContainer>
          <Route path='/' exact component={Calculator} />
          <Route path='/related/' component={RelatedArticles} />
        </GridContainer>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
