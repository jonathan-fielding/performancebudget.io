import { saveAs } from 'file-saver';
import { BudgetLineItem } from '../types/budget';
import buildJson from './build-json';

export default function downloadBudget(budget: BudgetLineItem[]) {
  const content = JSON.stringify(buildJson(budget), null, 2);
  const filename = 'budget.json';

  const blob = new Blob([content], {
    type: 'text/plain;charset=utf-8',
  });

  saveAs(blob, filename);
}
