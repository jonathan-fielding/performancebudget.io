import { BudgetTypes } from '../types/enums';

export const budgetTypes = [
  {
    id: BudgetTypes.asset,
    title: 'Asset',
    description:
      "Asset based performance budget's apply to the file size of the assets. There is often a direct link between the performance of your site and the size of your assets and this budget is good for spotting these things early.",
  },
  {
    id: BudgetTypes.cwv,
    title: 'Core Web Vitals',
    description:
      "Core Web Vitals based performance budget's target metrics that guage what the user experiences.",
  },
];
