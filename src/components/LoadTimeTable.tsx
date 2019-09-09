import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import HeaderTableCell from './HeaderTableCell';
import BodyTableCell from './BodyTableCell';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

const CONNECTION_SPEEDS = [
  {
    name: 'Mobile 2G - Slow (35 Kbps)',
    speed: 4.375
  },
  {
    name: '56K Dial-Up (49Kbps)',
    speed: 7
  },
  {
    name: 'Mobile 2G - Fast (150 Kbps)',
    speed: 18.75
  },
  {
    name: 'Mobile Edge (240 Kbps)',
    speed: 30
  },
  {
    name: 'Mobile 3G - Slow (780 Kbps)',
    speed: 96
  },
  {
    name: 'DSL (1.5Mbps)',
    speed: 187.5
  },
  {
    name: 'Mobile 3G - Fast (1.6 Mbps)',
    speed: 200
  },
  {
    name: 'Cable (5Mbps)',
    speed: 625
  },
  {
    name: 'FIOS (20Mbps)',
    speed: 2500
  }
];

interface LoadTimeTableProps {
  total: number,
}

 const LoadTimeTable: React.FC<LoadTimeTableProps> = (props) => {
  const classes = useStyles();
  const { total } = props;
  const isDesktop = useMediaQuery('(min-width:750px)');

  const connections = CONNECTION_SPEEDS.map((connection) => {
    return {
      ...connection,
      time: (total / connection.speed).toFixed(2),
    }
  });

  return ( 
    <Paper>
      <Table className={classes.root}>
        <TableHead>
          <TableRow>
            <HeaderTableCell>Connection Type</HeaderTableCell>
            <HeaderTableCell>Time (secs)</HeaderTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {connections.map((connection, index) => (
          <TableRow key={index}>
            <BodyTableCell>{connection.name}</BodyTableCell>
            <BodyTableCell>{connection.time} {isDesktop ? 'secs' : ''}</BodyTableCell>
          </TableRow>
        ))}
          
        </TableBody>
      </Table>
    </Paper>
  )
}

export default LoadTimeTable;