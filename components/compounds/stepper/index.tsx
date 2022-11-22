import { Fragment } from 'react'
import { selectStep } from '../../../store/budget-slice';
import { useSelector } from "react-redux";

export default function Stepper() {
  const step = useSelector(selectStep);
  const steps = [
    'Choose the type of budget', 'Configure your budget', 'Preview budget', 'Download Budget'
  ]

  return (
    <div className="mx-auto max-w-7xl pb-8 text-center">
      <ul className="steps lg:steps-horizontal">
        {steps.map((stepItem, index) => {
          return (
            <li
              key={index}
              className={index + 1 === step ? 'step step-primary' : 'step'}
            >
              <span className="hidden sm:block">{stepItem}</span>
            </li>
          );
        })}
      </ul>
    </div>
  )
}
