import clone from 'just-clone';
import { BUDGET_LINE_ITEMS } from '../data/budget-line-items';
import { BudgetLineItem } from '../store/budget-slice';
import { BudgetTypes } from '../types/enums';

//TODO - update these based on newer values
const AVERAGE_PERCENTS: { [key: string]: number } = {
  css: 3.25,
  html: 2.5,
  javascript: 16.5,
  images: 63,
  video: 9.75,
  fonts: 5,
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
