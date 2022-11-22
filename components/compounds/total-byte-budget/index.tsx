import { useSelector } from 'react-redux';
import {
  BudgetLineItem,
  selectBudgetSize,
  selectBudgetValues,
} from '../../../store/budgetSlice';

function add(accumulator: number, a: number | undefined) {
  if (a === undefined) {
    return accumulator;
  }
  return accumulator + a;
}

export default function TotalByteBudget() {
  const fields = useSelector(selectBudgetValues);
  const budgetSize = useSelector(selectBudgetSize);
  const selectedBytes = fields
    ?.map((field: BudgetLineItem) => field.userValue)
    .reduce(add, 0);

  const percentage = (selectedBytes / budgetSize) * 100;
  const used = `${selectedBytes}Kb of ${budgetSize}Kb used (${percentage.toFixed()}%)`;

  return <p className="pb-8 text-lg">{used}</p>;
}
