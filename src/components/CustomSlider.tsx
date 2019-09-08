import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

const CustomSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0 0',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#3f51b5',
    marginTop: -14,
    marginLeft: -14,
    '&:focus,&:hover,&$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 11px)',
    fontSize: '1rem',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    backgroundColor: 'currentColor',
  },
})(Slider);

export default CustomSlider;
