import { Fragment } from 'react'
import { selectBudgetType, setBudgetType, setStep } from "../../../store/budgetSlice";
import { useDispatch, useSelector } from "react-redux";
import ButtonBar from '../../compounds/button-bar';

interface BudgetLineItem {
  name: string;
  suggested: number;
  min: number;
  max: number;
  step?: number;
}

// 'html', 'css', 'javascript', 'images', 'video', 'fonts'
const defaultFields: any = {
  asset: [
    { name: 'lcp', suggested: 2500, min: 0, max: 5000 },
    { name: 'fid', suggested: 100, min: 0, max: 500 },
    { name: 'cls', min: 0, max: 1 },
    { name: 'inp' },
  ],
  cwv: [
    { name: 'lcp', suggested: 2500, min: 0, max: 5000 },
    { name: 'fid', suggested: 100, min: 0, max: 500 },
    { name: 'cls', min: 0, max: 1, step: 0.01 },
    { name: 'inp', suggested: 200, min: 0, max: 500 },
  ],
};

export default function BudgetConfiguration() {
  const budgetType = useSelector(selectBudgetType) || 'asset';
  const dispatch = useDispatch();

  const fields: BudgetLineItem[] = defaultFields[budgetType];

  return (
    <div className="flex flex-col items-center">
      <h2 className="pb-4 text-gray-700 font-bold text-xl sm:text-2xl">
        Configure your budget
      </h2>

      <div className="grid sm:grid-cols-2 gap-8 pb-8">
        {fields.map(({ name, suggested, min, max, step = 1 }: any, index) => (
          <div key={index}>
            <label htmlFor={name} className="mb-2 block">
              {name}
            </label>
            <input
              name={name}
              type="range"
              min={min}
              max={max}
              step={step}
              className="range range-md w-72 range-primary"
            />
          </div>
        ))}
      </div>

      <ButtonBar />
    </div>
  );
}
