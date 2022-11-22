import { ChangeEventHandler, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoadTime, setLoadTime } from '../../../store/budgetSlice';

//Take any value and check its a number
function isNumber(value: any) {
  return !isNaN(value);
}

export default function BudgetTimeInput() {
  const loadTime = useSelector(selectLoadTime);
  const dispatch = useDispatch();
  const [value, setValue] = useState(loadTime === null ? '' : String(loadTime));

  // Only allows numbers to be entered
  const validateInputIsInteger: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (value !== '' && !isNumber(value)) {
      return;
    }

    if (value === '') {
      dispatch(setLoadTime(null));
    } else {
      dispatch(setLoadTime(Number(value)));
    }

    setValue(value);
  };

  return (
    <div>
      <label
        htmlFor="budget-time"
        className="block text-xl sm:text-2xl font-bold text-gray-700 pb-4"
      >
        How long do you want your website to take to load?
      </label>
      <div className="flex flex-col items-center">
        <div className="">
          {/* TODO - add error handling */}
          <input
            value={value}
            id="budget-time"
            name="budget-time"
            type="text"
            onChange={validateInputIsInteger}
            className="relative w-56 cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-md"
          />
          <span className="inline-block pl-3">seconds</span>
        </div>
      </div>
    </div>
  );
}
