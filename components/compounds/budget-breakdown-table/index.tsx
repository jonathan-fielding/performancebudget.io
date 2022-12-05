import React from 'react';
import { useSelector } from 'react-redux';
import { selectBudgetValues } from '../../../store/budget-slice';
import {
  Table, Row, DataColumn, HeadingColumn,
} from '../../elements/table';

export default function BudgetBreakdownTable() {
  const budgetValues = useSelector(selectBudgetValues);
  return (
    <Table>
      <thead>
        <Row>
          {budgetValues.map((budgetValue) => (
            <HeadingColumn key={budgetValue.name}>
              {budgetValue.name}
            </HeadingColumn>
          ))}
        </Row>
      </thead>
      <tbody>
        <Row>
          {budgetValues.map((budgetValue) => (
            <DataColumn key={budgetValue.name}>
              {budgetValue?.userValue}
              {budgetValue?.unit}
            </DataColumn>
          ))}
        </Row>
      </tbody>
    </Table>
  );
}
