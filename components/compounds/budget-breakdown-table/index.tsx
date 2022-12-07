import React from 'react';
import { useSelector } from 'react-redux';
import { selectBudgetValues } from '../../../store/budget-slice';
import { Table, Row, DataColumn, HeadingColumn } from '../../elements/table';

export default function BudgetBreakdownTable() {
  const budgetValues = useSelector(selectBudgetValues);
  return (
    <Table>
      <thead>
        <Row>
          {budgetValues.map((budgetValue) => (
            <HeadingColumn key={budgetValue.name}>
              {budgetValue.label}
            </HeadingColumn>
          ))}
        </Row>
      </thead>
      <tbody>
        <Row>
          {budgetValues.map((budgetValue) => (
            <DataColumn key={budgetValue.name}>
              <span>
                {budgetValue?.userValue}
                {budgetValue?.unit}
              </span>
            </DataColumn>
          ))}
        </Row>
      </tbody>
    </Table>
  );
}
