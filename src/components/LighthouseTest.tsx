import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  input: {
    margin: theme.spacing(2),
    width: '40px',  
    fontSize: '1rem',
    '& input': {
      textAlign: 'center',
    }
  },
  select: {
    minWidth: '200px',  
    fontSize: '0.9rem',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  selectDesktop: {
    margin: theme.spacing(2),
  },
  query: {
    textAlign: 'center',
    fontSize: '1.1rem',
    marginBottom: '20px',
  },
  button: {
    marginTop: '40px',
    display: 'block',
    margin: '0 auto',
  },
}));

interface LighthouseTestProps {
  url: string,
  setUrl: any,
}

const LighthouseTest: React.FC<LighthouseTestProps> = (props) => {
  const classes = useStyles(props);
  
  function updateUrl(event: any) {
    props.setUrl(event.target.value);
  }

  return (
    <div>
      <div className={classes.query}>
        <span>

        <TextField
          id="filled-name"
          label="Website URL To Test"
          onKeyUp={updateUrl}
          defaultValue={props.url}
        />
        </span>
      </div>
    </div>
  );
}

export default LighthouseTest;