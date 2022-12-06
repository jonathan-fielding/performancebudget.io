import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBudgetType,
  selectBudgetValues,
  setBudgetValue,
} from '../../../store/budget-slice';
import ButtonBar from '../../compounds/button-bar';
import TotalByteBudget from '../../compounds/total-byte-budget';
import { BudgetTypes } from '../../../types/enums';
import InputSlider from '../../compounds/input-slider';

export default function BudgetConfiguration() {
  const budgetType = useSelector(selectBudgetType);
  const dispatch = useDispatch();
  const fields = useSelector(selectBudgetValues);

  const changeValue = (field: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setBudgetValue({
        name: field.target.name,
        value: Number(field.target.value),
      }),
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="pb-4 text-gray-700 font-bold text-xl sm:text-2xl">
        Configure your budget
      </h2>

      {budgetType === BudgetTypes.asset && <TotalByteBudget />}

      <div className="grid sm:grid-cols-2 gap-8 pb-8">
        {fields?.map(({ name, min, max, step, userValue, unit, label }) => (
          <InputSlider
            key={name}
            changeValue={changeValue}
            label={label}
            name={name}
            min={min}
            max={max}
            step={step}
            userValue={userValue}
            unit={unit}
          />
        ))}
      </div>

      <ButtonBar />
    </div>
  );
}
