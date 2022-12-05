import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectBudgetType,
  selectTotalBytes,
} from '../../../store/budget-slice';
import ButtonBar from '../../compounds/button-bar';
import EstimatedLoadTime from '../../compounds/estimated-load-time-table';
import BudgetBreakdownTable from '../../compounds/budget-breakdown-table';
import { BudgetTypes } from '../../../types/enums';

const titles = {
  [BudgetTypes.asset]: 'Asset Sizes',
  [BudgetTypes.cwv]: 'CWV Target Values',
};

export default function PreviewBudget() {
  const budgetType = useSelector(selectBudgetType);
  const budget = useSelector(selectTotalBytes);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-gray-700 font-bold text-xl sm:text-2xl">
        {titles[budgetType || 'asset']}
      </h2>
      <p className="pb-6 text-gray-700">
        The sizes you selected for your budget.
      </p>

      <div className="overflow-x-auto pb-12 text-gray-200">
        <BudgetBreakdownTable />
      </div>

      {budgetType === BudgetTypes.asset && (
        <>
          <p className="pb-6 text-lg">
            Total asset size:
            {budget}
            Kb
          </p>

          <h2 className="text-gray-700 font-bold text-xl sm:text-2xl">
            Estimated load times
          </h2>
          <p className="pb-6 text-gray-700">
            The load times of your chosen budget across different internet
            connection speeds.
          </p>

          <div className="overflow-x-auto pb-8 text-gray-200">
            <EstimatedLoadTime />
          </div>
        </>
      )}

      <ButtonBar />
    </div>
  );
}
