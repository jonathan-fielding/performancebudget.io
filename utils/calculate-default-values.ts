import clone from 'just-clone';
import BUDGET_LINE_ITEMS from '../data/budget-line-items';
import { BudgetLineItem } from '../types/budget';
import { BudgetTypes } from '../types/enums';

//TODO - update these based on newer values
const AVERAGE_PERCENTS: { [key: string]: number } = {
  stylesheet: 3.25,
  document: 2.5,
  script: 16.5,
  image: 63,
  media: 9.75,
  font: 5,
};

export function calculateDefaultValues(
  type: BudgetTypes,
  size: number
): BudgetLineItem[] {
  const lineItems: BudgetLineItem[] = BUDGET_LINE_ITEMS[type];
  const values = clone(lineItems);
  return values.map((lineItem) => {
    const average: number = AVERAGE_PERCENTS[lineItem.name];
    if (average) {
      lineItem.userValue = Math.round(size * average) / 100;
      lineItem.max = size;
    } else {
      lineItem.userValue = lineItem.suggested;
    }

    return lineItem;
  });
}
