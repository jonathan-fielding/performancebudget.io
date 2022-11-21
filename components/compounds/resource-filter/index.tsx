import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import {
  selectFilterValue,
  setFilterValue,
} from '../../../store/resourcesSlice';
import { useDispatch, useSelector } from 'react-redux';

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
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ResourceFilter() {
  const selectedValue = useSelector(selectFilterValue);
  const selected = filterValues.find(
    (filterValue) => filterValue.value === selectedValue
  );
  const dispatch = useDispatch();
  const setSelected = ({ value }: { value: number }) => {
    dispatch(setFilterValue(value));
  };

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="text-md sm:text-md font-bold text-gray-700 pb-4 pr-4">
            Filter:
          </Listbox.Label>

          <div className="relative mt-1 mb-5">
            <Listbox.Button className="relative cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-md w-64">
              {selected?.id === 0 ? (
                <span className="flex items-center">
                  <span className="ml-3 px-1 block truncate">
                    {selected.name}
                  </span>
                </span>
              ) : (
                <span className="flex items-center">
                  <span className="ml-3 block truncate">{selected?.name}</span>
                </span>
              )}

              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className=" w-64 absolute z-10 mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filterValues.map((filterValue) => (
                  <Listbox.Option
                    key={filterValue.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={filterValue}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {filterValue.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
