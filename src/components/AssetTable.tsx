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
  cssResult?: any,
  htmlResult?: any,
  javascriptResult?: any,
  videoResult?: any,
  fontsResult?: any,
  imagesResult?: any,
  hasResults?: boolean,
 }

const AssetTable: React.FC<AssetTableProps> = (props) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:750px)');

  
  
  function mobileTable() {
    return (
      <Table className={classes.table}>
        <TableBody>
          {props.hasResults && <TableRow>
            <BodyTableCell>Type</BodyTableCell>
            <BodyTableCell>Budget</BodyTableCell>
            <BodyTableCell>Actual</BodyTableCell>
          </TableRow>}
          <TableRow>
            <BodyTableCell>HTML</BodyTableCell>
            <BodyTableCell>{props.html}kb</BodyTableCell>
            {props.hasResults && <BodyTableCell>{props.htmlResult}kb</BodyTableCell>}
          </TableRow>
          <TableRow>
            <BodyTableCell>CSS</BodyTableCell>
            <BodyTableCell>{props.css}kb</BodyTableCell>
            {props.hasResults && <BodyTableCell>{props.cssResult}kb</BodyTableCell>}
          </TableRow>
          <TableRow>
            <BodyTableCell>JavaScript</BodyTableCell>
            <BodyTableCell>{props.javascript}kb</BodyTableCell>
            {props.hasResults && <BodyTableCell>{props.javascriptResult}kb</BodyTableCell>}
          </TableRow>
          <TableRow>
            <BodyTableCell>Images</BodyTableCell>
            <BodyTableCell>{props.images}kb</BodyTableCell>
            {props.hasResults && <BodyTableCell>{props.imagesResult}kb</BodyTableCell>}
          </TableRow>
          <TableRow>
            <BodyTableCell>Video</BodyTableCell>
            <BodyTableCell>{props.video}kb</BodyTableCell>
            {props.hasResults && <BodyTableCell>{props.videoResult}kb</BodyTableCell>}
          </TableRow>
          <TableRow>
            <BodyTableCell>Fonts</BodyTableCell>
            <BodyTableCell>{props.fonts}kb</BodyTableCell>
            {props.hasResults && <BodyTableCell>{props.fontsResult}kb</BodyTableCell>}
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
            {props.hasResults && <HeaderTableCell>Type</HeaderTableCell>}
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
            {props.hasResults && <HeaderTableCell>Budget</HeaderTableCell>}
            <BodyTableCell>{props.html}kb</BodyTableCell>
            <BodyTableCell>{props.css}kb</BodyTableCell>
            <BodyTableCell>{props.javascript}kb</BodyTableCell>
            <BodyTableCell>{props.images}kb</BodyTableCell>
            <BodyTableCell>{props.video}kb</BodyTableCell>
            <BodyTableCell>{props.fonts}kb</BodyTableCell>
          </TableRow>
          {props.hasResults && <TableRow>
            <HeaderTableCell>Actual</HeaderTableCell>
            <BodyTableCell>{props.htmlResult}kb</BodyTableCell>
            <BodyTableCell>{props.cssResult}kb</BodyTableCell>
            <BodyTableCell>{props.javascriptResult}kb</BodyTableCell>
            <BodyTableCell>{props.imagesResult}kb</BodyTableCell>
            <BodyTableCell>{props.videoResult}kb</BodyTableCell>
            <BodyTableCell>{props.fontsResult}kb</BodyTableCell>
          </TableRow>}
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