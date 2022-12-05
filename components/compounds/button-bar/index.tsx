import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStep, setStep } from '../../../store/budget-slice';

export default function ButtonBar() {
  const step = useSelector(selectStep);
  const dispatch = useDispatch();

  return (
    <div>
      {step !== 1 && (
        <button
          type="button"
          className="btn btn-wide mr-2"
          onClick={() => {
            dispatch(setStep(step - 1));
          }}
        >
          Back
        </button>
      )}
      {step !== 4 && (
        <button
          type="button"
          className="btn btn-primary  btn-wide"
          onClick={() => {
            dispatch(setStep(step + 1));
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}
