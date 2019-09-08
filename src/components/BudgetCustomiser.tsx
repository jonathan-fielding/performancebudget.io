import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CustomSlider from './CustomSlider';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    margin: '0 -10px 20px',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
  sliderPanel: {
    marginLeft: '10px',
    marginRight: '10px',
    background: '#f3f7fb',
    padding: '45px 20px 0px',
    textAlign: 'center',
    marginTop: '20px',
  }
}));

interface BudgetCustomiserProps {
  budget: any,
  css: any,
  fonts: any,
  html: any,
  images: any,
  video: any,
  javascript: any,
  setCss: any,
  setFonts: any,
  setHtml: any,
  setImages: any,
  setVideo: any,
  setJavascript: any,
 }

const BudgetCustomiser: React.FC<BudgetCustomiserProps> = (props) => {
  const classes = useStyles(props);
  const budget = props.budget;
  const sliders = [
    {
      label: 'HTML',
      value: props.html,
      setter: props.setHtml,
    },
    {
      label: 'CSS',
      value: props.css,
      setter: props.setCss,
    },
    {
      label: 'JavaScript',
      value: props.javascript,
      setter: props.setJavascript,
    },
    {
      label: 'Images',
      value: props.images,
      setter: props.setImages,
    },
    {
      label: 'Video',
      value: props.video,
      setter: props.setVideo,
    },
    {
      label: 'Fonts',
      value: props.fonts,
      setter: props.setFonts,
    },
  ];

  function wrapSet(setter: any) {
    return (event: any, value: any) => {
      setter(parseInt(value, 10));
    }
  }

  function labelFormatter(number: any) {
    return `${number}kb`;
  }

  return (
    <div className={classes.root}>
      {sliders.map((slider, index) => (
        <div className={classes.sliderPanel}>
          <CustomSlider
            aria-labelledby="discrete-slider"
            valueLabelDisplay="on"
            defaultValue={slider.value}
            step={1}
            min={0}
            max={budget}
            onChange={wrapSet(slider.setter)}
            valueLabelFormat={labelFormatter}
          />
          <h3>{slider.label}</h3>
        </div>
      ))}
    </div>
  );
}

export default BudgetCustomiser;