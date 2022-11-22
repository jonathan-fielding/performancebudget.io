import { useSelector } from 'react-redux';
import { selectBudgetSize, selectTotalBytes } from '../../../store/budgetSlice';

export default function TotalByteBudget() {
  const budgetSize = useSelector(selectBudgetSize);
  const selectedBytes = useSelector(selectTotalBytes);
  const percentage = (selectedBytes / budgetSize) * 100;
  const used = `${selectedBytes}Kb of ${budgetSize}Kb used (${percentage.toFixed()}%)`;

  return <p className="pb-8 text-lg">{used}</p>;
}
