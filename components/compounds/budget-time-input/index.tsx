import { Fragment } from 'react';

export default function BudgetTimeInput() {
  return (
    <div>
      <label
        htmlFor="budget-time"
        className="block text-xl sm:text-2xl font-bold text-gray-700 pb-4"
      >
        How long do you want your website to take to load?
      </label>
      <div className="flex flex-col items-center">
        <div className="">
          <input
            id="budget-time"
            name="budget-time"
            type="text"
            className="relative w-56 cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-md"
          />
          <span className="inline-block pl-3">seconds</span>
        </div>
      </div>
    </div>
  );
}
