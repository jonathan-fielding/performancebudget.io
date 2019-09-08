import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const HeaderTableCell = withStyles({
  root: {
    fontSize: '1.1rem',
  },
})(TableCell);

export default HeaderTableCell;
