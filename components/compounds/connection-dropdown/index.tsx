import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { selectConnectionSpeed, setConnectionSpeed } from "../../../store/budgetSlice";
import { useDispatch, useSelector } from "react-redux";

interface ConnectionSpeed {
  id: number;
  name: string;
  value: number;
  image?: string;
}

const people: ConnectionSpeed[] = [
  {
    id: 0,
    name: 'Select a speed which reflects your websites audience',
    value: 0,
  },
  {
    id: 1,
    name: 'Mobile 2G - Slow (35 Kbps)',
    value: 4.375,
  },
  {
    id: 2,
    name: '56K Dial-Up (49Kbps)',
    value: 7,
  },
  {
    id: 3,
    name: 'Mobile 2G - Fast (150 Kbps)',
    value: 18.75,
  },
  {
    id: 4,
    name: 'Mobile Edge (240 Kbps)',
    value: 30,
  },
  {
    id: 5,
    name: 'Mobile 3G - Slow (780 Kbps)',
    value: 96,
  },
  {
    id: 6,
    name: 'DSL (1.5Mbps)',
    value: 187.5,
  },
  {
    id: 7,
    name: 'Mobile 3G - Fast (1.6 Mbps)',
    value: 200,
  },
  {
    id: 8,
    name: 'Cable (5Mbps)',
    value: 625,
  },
  {
    id: 9,
    name: 'FIOS (20Mbps)',
    value: 2500,
  },
  {
    id: 10,
    name: 'Custom',
    value: 999999999999,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ConnectionDropdown() {
  const selectedValue = useSelector(selectConnectionSpeed);
  const selected = people.find((person) => person.value === selectedValue)
  const dispatch = useDispatch();
  const setSelected = ({ value }: { value: number }) => {
    dispatch(setConnectionSpeed(value));
  };

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-xl sm:text-2xl font-bold text-gray-700 pb-4">
            Choose the connection speed you want to optimise for
          </Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-md">
              <span className="flex items-center">
                <span className="ml-3 px-2 block truncate">
                  {selected?.name}
                </span>
              </span>
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
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
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
                            {person.name}
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
