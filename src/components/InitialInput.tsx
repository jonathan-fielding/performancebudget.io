import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Select from '@material-ui/core/Select';

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
  },
  button: {
    marginTop: '40px',
    display: 'block',
    margin: '0 auto',
  },
}));

interface InitialInputProps {
  speed: number,
  setSpeed: Function,
  loadtime: number,
  setLoadtime: Function,
 }

const InitialInput: React.FC<InitialInputProps> = (props) => {
  const classes = useStyles(props);
  const isMobile = useMediaQuery('(max-width:749px)');

  function updateLoadtime(event: any) {
    props.setLoadtime(parseFloat(event.target.value));
  }

  function updateSpeed(event: any) {
    props.setSpeed(parseFloat(event.target.value));
  }

  return (
    <div>
      <div className={classes.query}>
        I want my site to load in

        {isMobile ? <br /> : ''}

        <span>
          <Input
            id="loadtime"
            className={classes.input}
            onKeyUp={updateLoadtime}
            defaultValue={props.loadtime}
          />
        </span>

        seconds on a 

        {isMobile ? <br /> : ''}

        <Select
          value={props.speed || ''}
          onChange={updateSpeed}
          className={classes.select}
          input={<Input name="age" id="age-helper" />}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value="4.375">Mobile 2G - Slow (35 Kbps)</MenuItem>
          <MenuItem value="7">56K Dial-Up (49Kbps)</MenuItem>
          <MenuItem value="18.75">Mobile 2G - Fast (150 Kbps)</MenuItem>
          <MenuItem value="30">Mobile Edge (240 Kbps)</MenuItem>
          <MenuItem value="96">Mobile 3G - Slow (780 Kbps)</MenuItem>
          <MenuItem value="187.5">DSL (1.5Mbps)</MenuItem>
          <MenuItem value="200">Mobile 3G - Fast (1.6 Mbps)</MenuItem>
          <MenuItem value="625">Cable (5Mbps)</MenuItem>
          <MenuItem value="2500">FIOS (20Mbps)</MenuItem>
        </Select>

        connection.
      </div>
    </div>
  );
}

export default InitialInput;