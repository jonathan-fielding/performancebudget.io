import { BudgetLineItem } from '../types/budget';
import { LighthouseType } from '../types/enums';

export default function buildJson(budgetLineItems: BudgetLineItem[]) {
  const resourceSizes = budgetLineItems
    .filter((line) => line.type === LighthouseType.resourceSizes)
    .map(({ name, userValue }) => ({
      resourceType: name,
      budget: userValue,
    }));

  return [
    {
      resourceSizes,
    },
  ];
}
