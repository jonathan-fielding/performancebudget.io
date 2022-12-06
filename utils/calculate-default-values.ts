import clone from 'just-clone';
import BUDGET_LINE_ITEMS from '../data/budget-line-items';
import { BudgetLineItem } from '../types/budget';
import { BudgetTypes } from '../types/enums';
import { AVERAGE_PERCENTS } from '../data/average-asset-percentages';

function calculateDefaultValues(
  type: BudgetTypes,
  size: number
): BudgetLineItem[] {
  const lineItems: BudgetLineItem[] = BUDGET_LINE_ITEMS[type];
  const values = clone(lineItems);
  return values.map((lineItem) => {
    const average: number = AVERAGE_PERCENTS[lineItem.name];
    // Check if we have data meaning we can offer a more meaningful starting point
    if (average) {
      return {
        ...lineItem,
        userValue: Math.round(size * average) / 100,
        max: size,
      };
    }
    return {
      ...lineItem,
      userValue: lineItem.suggested,
    };
  });
}

export default calculateDefaultValues;
