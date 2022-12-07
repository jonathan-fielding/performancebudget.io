import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterValue } from '../../../store/resourcesSlice';

export default function ResourceFilter() {
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
            defaultValue="all"
          >
            <option value="all">Show All</option>
            <option value="case-study">Case Study</option>
            <option value="cwv">Core Web Vitals</option>
            <option value="budget">Performance Budgets</option>
          </select>
        </div>
      </div>
    </div>
  );
}
