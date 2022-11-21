import { ChangeEvent, Fragment } from 'react';
import {
  selectBudgetType,
  selectBudgetValues,
  setBudgetValue,
} from '../../../store/budgetSlice';
import { useDispatch, useSelector } from 'react-redux';
import ButtonBar from '../../compounds/button-bar';

export default function BudgetConfiguration() {
  const budgetType = useSelector(selectBudgetType) || 'asset';
  const dispatch = useDispatch();
  const fields = useSelector(selectBudgetValues);

  const changeValue = (field: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setBudgetValue({
        name: field.target.name,
        value: parseInt(field.target.value, 10),
      })
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="pb-4 text-gray-700 font-bold text-xl sm:text-2xl">
        Configure your budget
      </h2>

      <div className="grid sm:grid-cols-2 gap-8 pb-8">
        {fields?.map(
          ({ name, suggested, min, max, step, userValue, unit }, index) => (
            <div key={index}>
              <label htmlFor={name} className="mb-2 block">
                {name}
                <span className="float-right">
                  {userValue}
                  {unit}
                </span>
              </label>
              <input
                name={name}
                type="range"
                min={min}
                max={max}
                step={step}
                className="range range-md w-72 range-primary"
                onChange={changeValue}
              />
            </div>
          )
        )}
      </div>

      <ButtonBar />
    </div>
  );
}
