import React from 'react';
import { FunnelIcon } from '@heroicons/react/20/solid';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilterValue,
  setFilterValue,
} from '../../../store/resourcesSlice';

interface FilterValues {
  id: number;
  name: string;
  value: string | null;
}

const filterValues: FilterValues[] = [
  {
    id: 0,
    name: 'Filter by',
    value: 'all',
  },
  {
    id: 1,
    name: 'Performance Budgets',
    value: 'budget',
  },
  {
    id: 2,
    name: 'Core Web Vitals',
    value: 'cwv',
  },
  {
    id: 3,
    name: 'Case Studies',
    value: 'case-study',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ResourceFilter() {
  const [filtersVisible, setFiltersVisible] = React.useState(false);
  const selectedValue = useSelector(selectFilterValue);
  const selectedFilter = filterValues.find(
    (filterValue) => filterValue.value === selectedValue
  );
  const dispatch = useDispatch();
  const setSelected = ({ target }: any) => {
    dispatch(setFilterValue(target.value));
  };

  return (
    <div className="pb-8">
      <div className="px-4 py-8 bg-white rounded-lg">
        <h2 className="px-4 pb-2 text-gray-700 font-bold text-xl sm:text-2xl">
          Filters
        </h2>
        <div className="px-4">
          <h2>Topics</h2>
          <select
            className="select select-bordered w-full"
            onChange={setSelected}
          >
            <option selected value="all">
              Show All
            </option>
            <option value="case-study">Case Study</option>
            <option value="cwv">Core Web Vitals</option>
            <option value="budget">Performance Budgets</option>
          </select>
        </div>
      </div>
    </div>
  );
}
