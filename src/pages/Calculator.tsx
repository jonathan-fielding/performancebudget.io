import React from 'react';

// Material UI Components
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

// Material UI Helpers
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Custom Components
import InitialInput from '../components/InitialInput';
import AssetTable from '../components/AssetTable';
import LoadTimeTable from '../components/LoadTimeTable';
import ButtonBar from '../components/ButtonBar';
import ErrorMessage from '../components/ErrorMessage';
import BudgetCustomiser from '../components/BudgetCustomiser';
import UploadButton from '../components/UploadButton';
import LighthouseTest from '../components/LighthouseTest';
import Helper from '../components/Helper';

// Custom utils
import downloadBudget from '../utils/download-budget';
import buildJson from '../utils/build-json';

const AVERAGE_PERCENTS = {
	css: 3.25,
	html: 2.5,
	js: 16.5,
	images: 63,
	video: 9.75,
	fonts: 5 
};

const Calculator: React.FC = (props) => {
  let jobKey: string = '';
  const isDesktop = useMediaQuery('(min-width:750px)');
  const [activeStep, setActiveStep] = React.useState(0);
  const [step1Error, setStep1Error] = React.useState(false);
  const [loadtime, setLoadtime] = React.useState();
  const [speed, setSpeed] = React.useState();
  const [budget, setBudget] = React.useState(0);
  const [css, setCss] = React.useState(0);
  const [html, setHtml] = React.useState(0);
  const [javascript, setJavascript] = React.useState(0);
  const [video, setVideo] = React.useState(0);
  const [fonts, setFonts] = React.useState(0);
  const [images, setImages] = React.useState(0);
  const [url, setUrl] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [urlError, setUrlError] = React.useState(false);

  const [cssResult, setCssResult] = React.useState(0);
  const [htmlResult, setHtmlResult] = React.useState(0);
  const [javascriptResult, setJavascriptResult] = React.useState(0);
  const [videoResult, setVideoResult] = React.useState(0);
  const [fontsResult, setFontsResult] = React.useState(0);
  const [imagesResult, setImagesResult] = React.useState(0);
  const [hasResult, setHasResult] = React.useState(false);
  const [queuePosition, setQueuePosition] = React.useState();

  const steps = isDesktop ? 
    ['Set your target', 'Configure your budget', 'Preview budget', 'Test with Lighthouse', 'Download Budget'] :
    ['', '', '', '', ''];

  function calculate() {
    const calculatedBudget = speed * loadtime;
    setBudget(calculatedBudget);
    setCss(Math.floor((calculatedBudget / 100) * AVERAGE_PERCENTS.css));
    setFonts(Math.floor((calculatedBudget / 100) * AVERAGE_PERCENTS.fonts));
    setHtml(Math.floor((calculatedBudget / 100) * AVERAGE_PERCENTS.html));
    setImages(Math.floor((calculatedBudget / 100) * AVERAGE_PERCENTS.images));
    setJavascript(Math.floor((calculatedBudget / 100) * AVERAGE_PERCENTS.js));
    setVideo(Math.floor((calculatedBudget / 100) * AVERAGE_PERCENTS.video));
  }

  function validateUrl() {
    // eslint-disable-next-line
    const urlRegex = new RegExp(/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);
    return urlRegex.test(url);
  }

  function handleNext() {
    // Clear lighthouse result
    setHasResult(false);

    // Special next handling
    switch (activeStep) {
      case 0:
        if (speed > 0 && loadtime > 0) {
          setStep1Error(false);
          calculate();
        } else {
          setStep1Error(true);
          return; // Exit as errored
        }
        break;
      case 3:
        if (!validateUrl()) {
          setUrlError(true);
          return;
        } else {
          setUrlError(false);
        }

        const processedBudget = buildJson({
          css,
          html,
          javascript,
          video,
          images,
          fonts,
        });

        setLoading(true);
        
        fetch('http://localhost:4000/job', {
          method: 'post',
          body: JSON.stringify({
              url,
              budget: processedBudget,
          }),
          headers: { 'Content-Type': 'application/json' },
        }).then(r => r.json()).then((lighthouseResult) => {
          jobKey = lighthouseResult.jobId;
          pollLighthouse();
        });

        return;
      case 4:
        downloadBudget({
          css,
          html,
          javascript,
          video,
          images,
          fonts,
        });
        return;
      default:
        break;
    }

    window.scrollTo(0,0);
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function pollLighthouse() {
    fetch(`http://localhost:4000/job/${jobKey}`).then(r => r.json()).then((lighthouseResult) => {
      if (lighthouseResult.javascript) {
        setLoading(false);
        processLighthouseResponse(lighthouseResult)
      } else {
        if (lighthouseResult.queuePosition) {
          setQueuePosition(lighthouseResult.queuePosition);
        } else {
          setQueuePosition(0);
        }

        setTimeout(pollLighthouse, 1000);
      }
    });
  }

  function processLighthouseResponse(obj: any) {
      setCssResult(obj.css / 1000);
      setHtmlResult(obj.html / 1000);
      setJavascriptResult(obj.javascript / 1000);
      setVideoResult(obj.video / 1000);
      setImagesResult(obj.images / 1000);
      setFontsResult(obj.fonts / 1000);
      setHasResult(true);
  }

  function handleSkip() {
    window.scrollTo(0,0);
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    window.scrollTo(0,0);
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return step1();
      case 1:
        return step2();
      case 2:
        return step3();
      case 3:
        return step4();
      case 4:
        return step5();
      default:
        return 'Unknown step';
    }
  }

  function onUpload() {
    setActiveStep(1);
  }

  function step1() {
    return (
      <div>
        <InitialInput
          speed={speed}
          setSpeed={setSpeed}
          loadtime={loadtime}
          setLoadtime={setLoadtime}
        />

        <ErrorMessage display={step1Error}>Please enter both the number of seconds and select a connection type</ErrorMessage>

        {buttons()}

        <UploadButton
          setCss={setCss}
          setFonts={setFonts}
          setHtml={setHtml}
          setImages={setImages}
          setJavascript={setJavascript}
          setVideo={setVideo}
          setBudget={setBudget}
          onUpload={onUpload}
        />
      </div>
    )
  }

  function step2() {
    const total = css + fonts + html + images + video + javascript;

    return (
      <div>
        <Helper type="alignCenter">
          <h2>Your budget:</h2>
          <p>{total}kb of {budget}kb used</p>

          <p>Customise your budget</p>
        </Helper>

        <BudgetCustomiser
          budget={budget}
          css={css}
          fonts={fonts}
          html={html}
          images={images}
          video={video}
          javascript={javascript}
          setCss={setCss}
          setFonts={setFonts}
          setHtml={setHtml}
          setImages={setImages}
          setVideo={setVideo}
          setJavascript={setJavascript}
        />

        {buttons()}
      </div>
    )
  }

  function step3() {
    const total = css + fonts + html + images + video + javascript;

    return (
      <div className="narrow-container">
        <h2>Asset Sizes</h2>
        <p>The sizes you selected for your budget.</p>

        <AssetTable
          html={html}
          css={css}
          javascript={javascript}
          images={images}
          video={video}
          fonts={fonts}
        />

        <h2>Estimated load times</h2>
        <p>The load times of your chosen budget across different internet connection speeds.</p>
        <LoadTimeTable total={total} />

        {buttons()}
      </div>
    )
  }

  function step4() {
    return (
      <Helper type="alignCenter">
        <h2>Test your budget (Beta)</h2>

        <p>Having defined your budget you can now test your site to see how it measures up.</p>

        <LighthouseTest url={url} setUrl={setUrl} />

        {!hasResult && queuePosition === 0 && <p>
          Your test is currently being run, this normally takes a few seconds.
        </p>}

        {queuePosition > 0 && <p>
          Currently you are in a queue, your position is {queuePosition}
        </p>}

        {urlError && <ErrorMessage>Please enter a valid URL</ErrorMessage>}

        {hasResult && <AssetTable
          html={html}
          css={css}
          javascript={javascript}
          images={images}
          video={video}
          fonts={fonts}
          cssResult={cssResult}
          htmlResult={htmlResult}
          javascriptResult={javascriptResult}
          videoResult={videoResult}
          fontsResult={fontsResult}
          imagesResult={imagesResult}
          hasResults={true}
        />}

        {buttons()}
      </Helper>
    )
  }

  function step5() {
    return (
      <Helper type="alignCenter">
        <h2>Download lighthouse budget config</h2>

        <p>This performance budget calculator allows you to export the budget you have built as a lighthouse config file</p>
        <p>In addition if you later want to work on your budget further you can import it back into performancebudget.io</p>

        {buttons()}
      </Helper>
    )
  }

  function buttons() {
    const nextTexts = [
      'Calculate',
      'Next',
      'Next',
      'Test',
      'Download',
    ];

    return (
      <div>
        <ButtonBar
          handleBack={handleBack}
          handleNext={handleNext}
          handleSkip={handleSkip}
          nextText={nextTexts[activeStep]}
          showSkip={activeStep === 3}
          showBack={activeStep !== 0}
          loading={loading}
        />
      </div>
    )
  }

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        { getStepContent(activeStep) }
      </div>
    </div>
  );
}

export default Calculator;
        