import { useSelector } from 'react-redux';
import { CONNECTION_SPEEDS } from '../../../data/connection-speeds';
import { selectBudgetValues } from '../../../store/budget-slice';
import { Table, Row, DataColumn, HeadingColumn } from '../../elements/table';

export default function BudgetBreakdownTable() {
  const budgetValues = useSelector(selectBudgetValues);
  return (
    <Table>
      <thead>
        <Row>
          {budgetValues.map((budgetValue, index) => {
            return (
              <HeadingColumn key={index}>{budgetValue.name}</HeadingColumn>
            );
          })}
        </Row>
      </thead>
      <tbody>
        <Row>
          {budgetValues.map((budgetValue: any, index) => {
            return (
              <DataColumn key={index}>
                {budgetValue?.userValue}
                {budgetValue?.unit}
              </DataColumn>
            );
          })}
        </Row>
      </tbody>
    </Table>
  );
}
