import { BudgetLineItem } from '../store/budget-slice';

interface ProcessedBudget {
  html?: number;
  javascript?: number;
  image?: number;
  css?: number;
  video?: number;
  fonts?: number;
  total?: number;
}

function processBudget(budget: BudgetLineItem[]): ProcessedBudget {
  const processedBudget: any = {
    total: 0,
  };

  budget.forEach(({ name, userValue }: BudgetLineItem) => {
    processedBudget[name] = userValue || 0;
    processedBudget.total = processedBudget.total + userValue;
  });

  return processedBudget;
}

export default function buildJson(budgetLineItems: BudgetLineItem[]) {
  const budget = processBudget(budgetLineItems);

  return [
    {
      resourceSizes: [
        {
          resourceType: 'document',
          budget: budget.html,
        },
        {
          resourceType: 'script',
          budget: budget.javascript,
        },
        {
          resourceType: 'image',
          budget: budget.image,
        },
        {
          resourceType: 'stylesheet',
          budget: budget.css,
        },
        {
          resourceType: 'media',
          budget: budget.video,
        },
        {
          resourceType: 'font',
          budget: budget.fonts,
        },
        {
          resourceType: 'total',
          budget: budget.total,
        },
      ],
    },
  ];
}
