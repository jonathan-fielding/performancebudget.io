import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  alignCenter: {
    textAlign: 'center',
  },
}));

interface HelperProps {
  type: string
}

const Helper: React.FC<HelperProps> = (props) => {
  const classes: any = useStyles(props);
  const classForType = classes[props.type];

  return (
    <div className={classForType}>
      {props.children}
    </div>
  );
}

export default Helper;
        