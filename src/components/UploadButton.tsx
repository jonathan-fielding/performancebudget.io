import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';

import lighthouseBudgetParser from '../utils/lighthouse-budget-parser';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    marginTop: '10px',
  },
  infoIcon: {
    height: '15px',
    width: '15px',
    marginLeft: '5px',
  }
}));

interface UploadButtonProps {
  setCss: Function,
  setFonts: Function,
  setHtml: Function,
  setImages: Function,
  setJavascript: Function,
  setVideo: Function,
  setBudget: Function,
  onUpload: Function,
}

const UploadButton: React.FC<UploadButtonProps> = (props) => {
  const classes = useStyles(props);

  function uploadFile(event: any) {
    const files = Array.from(event.target.files);

    files.forEach((file: any) => {
      if (!file.type.startsWith('application/json')){ 
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const fileContent = event.target.result;

        try {
          const importedContent = JSON.parse(fileContent);

          const parsedBudget = lighthouseBudgetParser(importedContent);
          
          props.setCss(parsedBudget.css);
          props.setFonts(parsedBudget.fonts);
          props.setHtml(parsedBudget.html);
          props.setImages(parsedBudget.images);
          props.setJavascript(parsedBudget.javascript);
          props.setVideo(parsedBudget.video);
          props.setBudget(parsedBudget.total);
          props.onUpload();
          
        } catch (error) {
          // TODO add better error handling
        }
      }

      reader.readAsText(file);
    });
  }

  return (
    <div className={classes.root}>
      <input
        accept="application/json"
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={uploadFile}
      />
      <label htmlFor="raised-button-file">
        <Button>
          Upload existing budget
          <Tooltip title="Upload your lighthouse performance budget as a starting point">
            <InfoIcon className={classes.infoIcon} />
          </Tooltip>
        </Button>
      </label> 
    </div>
  );
}

export default UploadButton;