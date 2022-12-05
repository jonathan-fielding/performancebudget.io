import { saveAs } from 'file-saver';
import { BudgetLineItem } from '../store/budget-slice';
import { BudgetTypes } from '../types/enums';
import buildJson from './build-json';

export default function downloadBudget(
  budgetType: BudgetTypes,
  budget: BudgetLineItem[]
) {
  const content = JSON.stringify(buildJson(budgetType, budget));
  const filename = 'budget.json';

  const blob = new Blob([content], {
    type: 'text/plain;charset=utf-8',
  });

  saveAs(blob, filename);
}
