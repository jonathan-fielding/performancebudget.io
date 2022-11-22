import clone from 'just-clone';
import {
  BudgetLineItems,
  BudgetLineItem,
  BudgetTypes,
} from '../store/budget-slice';

//TODO - update these based on newer values
const AVERAGE_PERCENTS: { [key: string]: number } = {
  css: 3.25,
  html: 2.5,
  javascript: 16.5,
  images: 63,
  video: 9.75,
  fonts: 5,
};

const BUDGET_LINE_ITEMS: BudgetLineItems = {
  asset: [
    { name: 'html', suggested: 2500, min: 0, max: 0, unit: 'kb' },
    { name: 'css', suggested: 100, min: 0, max: 0, unit: 'kb' },
    { name: 'javascript', suggested: 100, min: 0, max: 0, unit: 'kb' },
    { name: 'images', suggested: 100, min: 0, max: 0, unit: 'kb' },
    { name: 'video', suggested: 100, min: 0, max: 0, unit: 'kb' },
    { name: 'fonts', suggested: 100, min: 0, max: 0, unit: 'kb' },
  ],
  cwv: [
    { name: 'lcp', suggested: 2500, min: 0, max: 5000, unit: 'ms' },
    { name: 'fid', suggested: 100, min: 0, max: 500, unit: 'ms' },
    { name: 'cls', suggested: 0.1, min: 0, max: 1, step: 0.01, unit: 'kb' },
    { name: 'inp', suggested: 0.2, min: 0, max: 1, step: 0.01, unit: 'kb' },
  ],
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
