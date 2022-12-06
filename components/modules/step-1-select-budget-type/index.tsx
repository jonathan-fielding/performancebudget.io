import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BudgetCard from '../../compounds/budget-type-card';
import ConnectionDropdown from '../../compounds/connection-dropdown';
import {
  selectBudgetType,
  setBudgetType,
  selectConnectionSpeed,
  selectLoadTime,
} from '../../../store/budget-slice';
import ButtonBar from '../../compounds/button-bar';
import BudgetTimeInput from '../../compounds/budget-time-input';
import { BudgetTypes } from '../../../types/enums';
import BUDGET_TYPES from '../../../data/budget-types';

export default function BudgetType() {
  const connectionSpeed = useSelector(selectConnectionSpeed);
  const loadTime = useSelector(selectLoadTime);
  const budgetType = useSelector(selectBudgetType);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center">
      <h2 className="pb-8 text-gray-700 font-bold text-xl sm:text-2xl">
        Choose the type of metrics you want to target
      </h2>
      <div className="grid sm:grid-cols-2 gap-8 pb-8">
        {BUDGET_TYPES.map(({ title, description, id }) => (
          <BudgetCard
            title={title}
            key={id}
            description={description}
            onBudgetClick={() => dispatch(setBudgetType(id))}
            selected={id === budgetType}
          />
        ))}
      </div>
      {budgetType === BudgetTypes.asset && (
        <div className=" pb-8">
          <ConnectionDropdown />
        </div>
      )}
      {budgetType === BudgetTypes.asset && connectionSpeed !== 0 && (
        <div className="pb-8">
          <BudgetTimeInput />
        </div>
      )}
      {(budgetType === BudgetTypes.cwv
        || (budgetType === BudgetTypes.asset
          && connectionSpeed !== 0
          && loadTime !== null
          && loadTime > 0)) && <ButtonBar />}
    </div>
  );
}
