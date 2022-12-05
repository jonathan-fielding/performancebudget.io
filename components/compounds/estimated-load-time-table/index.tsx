import React from 'react';
import { useSelector } from 'react-redux';
import CONNECTION_SPEEDS from '../../../data/connection-speeds';
import { selectTotalBytes } from '../../../store/budget-slice';
import { twoDecimalPlace } from '../../../utils/rendering';
import {
  Table, Row, DataColumn, HeadingColumn,
} from '../../elements/table';

const calculateTime = (bytes: number, speed: number) => {
  const seconds = bytes / speed;
  return twoDecimalPlace(seconds);
};

export default function EstimatedLoadTimeTable() {
  const budgetSize = useSelector(selectTotalBytes);
  return (
    <Table>
      <thead>
        <Row>
          <HeadingColumn>Connection Type</HeadingColumn>
          <HeadingColumn>Time (secs)</HeadingColumn>
        </Row>
      </thead>
      <tbody>
        {CONNECTION_SPEEDS.map((connectionSpeed) => (
          <Row key={connectionSpeed.name}>
            <HeadingColumn>{connectionSpeed.name}</HeadingColumn>
            <DataColumn>
              {`${calculateTime(budgetSize, connectionSpeed.speed)}`}
            </DataColumn>
          </Row>
        ))}
      </tbody>
    </Table>
  );
}
