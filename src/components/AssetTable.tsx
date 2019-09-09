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
    width: '100%',
    marginTop: theme.spacing(3),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {

  }
}));

interface AssetTableProps {
  css: any,
  fonts: any,
  html: any,
  images: any,
  video: any,
  javascript: any,
 }

const AssetTable: React.FC<AssetTableProps> = (props) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:750px)');

  function mobileTable() {
    return (
      <Table className={classes.table}>
        <TableBody>
          <TableRow>
            <BodyTableCell>HTML</BodyTableCell>
            <BodyTableCell>{props.html}kb</BodyTableCell>
          </TableRow>
          <TableRow>
            <BodyTableCell>CSS</BodyTableCell>
            <BodyTableCell>{props.css}kb</BodyTableCell>
          </TableRow>
          <TableRow>
            <BodyTableCell>JavaScript</BodyTableCell>
            <BodyTableCell>{props.javascript}kb</BodyTableCell>
          </TableRow>
          <TableRow>
            <BodyTableCell>Images</BodyTableCell>
            <BodyTableCell>{props.images}kb</BodyTableCell>
          </TableRow>
          <TableRow>
            <BodyTableCell>Video</BodyTableCell>
            <BodyTableCell>{props.video}kb</BodyTableCell>
          </TableRow>
          <TableRow>
            <BodyTableCell>Fonts</BodyTableCell>
            <BodyTableCell>{props.fonts}kb</BodyTableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }

  function desktopTable() {
    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <HeaderTableCell>HTML</HeaderTableCell>
            <HeaderTableCell>CSS</HeaderTableCell>
            <HeaderTableCell>JavaScript</HeaderTableCell>
            <HeaderTableCell>Images</HeaderTableCell>
            <HeaderTableCell>Video</HeaderTableCell>
            <HeaderTableCell>Fonts</HeaderTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <BodyTableCell>{props.html}kb</BodyTableCell>
            <BodyTableCell>{props.css}kb</BodyTableCell>
            <BodyTableCell>{props.javascript}kb</BodyTableCell>
            <BodyTableCell>{props.images}kb</BodyTableCell>
            <BodyTableCell>{props.video}kb</BodyTableCell>
            <BodyTableCell>{props.fonts}kb</BodyTableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }

  return ( 
    <Paper className={classes.paper}>
      {isDesktop ? desktopTable() : mobileTable()}
    </Paper>
  )
}

export default AssetTable;