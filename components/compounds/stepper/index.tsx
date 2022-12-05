import React from 'react';
import { useSelector } from 'react-redux';
import { selectStep } from '../../../store/budget-slice';

export default function Stepper() {
  const step = useSelector(selectStep);
  const steps = [
    'Choose the type of budget',
    'Configure your budget',
    'Preview budget',
    'Download Budget',
  ];

  return (
    <div className="mx-auto max-w-7xl pb-8 text-center">
      <ul className="steps lg:steps-horizontal">
        {steps.map((stepItem, index) => (
          <li
            key={stepItem.toLowerCase().replace(' ', '-')}
            className={index + 1 === step ? 'step step-primary' : 'step'}
          >
            <span className="hidden sm:block">{stepItem}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
