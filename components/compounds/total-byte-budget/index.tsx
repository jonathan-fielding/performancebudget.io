import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectBudgetSize,
  selectTotalBytes,
} from '../../../store/budget-slice';
import twoDecimalPlace from '../../../utils/rendering';

export default function TotalByteBudget() {
  const budgetSize = useSelector(selectBudgetSize);
  const selectedBytes = useSelector(selectTotalBytes);
  const percentage = (selectedBytes / budgetSize) * 100;
  const used = `${twoDecimalPlace(selectedBytes)}Kb of ${twoDecimalPlace(
    budgetSize
  )}Kb used (${percentage.toFixed()}%)`;

  return <p className="pb-8 text-lg">{used}</p>;
}
