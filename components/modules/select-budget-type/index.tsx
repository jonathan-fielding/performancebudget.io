import { Fragment } from 'react';
import BudgetCard from '../../compounds/budget-type-card';
import ConnectionDropdown from '../../compounds/connection-dropdown';
import {
  selectBudgetType,
  setBudgetType,
  setStep,
  selectConnectionSpeed,
} from '../../../store/budgetSlice';
import { useDispatch, useSelector } from 'react-redux';
import ButtonBar from '../../compounds/button-bar';

export default function BudgetType() {
  const connectionSpeed = useSelector(selectConnectionSpeed);
  const budgetType = useSelector(selectBudgetType);
  const dispatch = useDispatch();

  const budgetTypes = [
    {
      id: 'asset',
      title: 'Asset',
      description:
        "Asset based performance budget's apply to the file size of the assets. There is often a direct link between the performance of your site and the size of your assets and this budget is good for spotting these things early.",
    },
    {
      id: 'cwv',
      title: 'Core Web Vitals',
      description:
        "Core Web Vitals based performance budget's target metrics that guage what the user experiences.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="pb-8 text-gray-700 font-bold text-xl sm:text-2xl">
        Choose the type of metrics you want to target
      </h2>
      <div className="grid sm:grid-cols-2 gap-8 pb-8">
        {budgetTypes.map(({ title, description, id }) => (
          <BudgetCard
            title={title}
            key={id}
            description={description}
            onBudgetClick={() => dispatch(setBudgetType(id))}
            selected={id === budgetType}
          />
        ))}
      </div>
      {budgetType === 'asset' && (
        <div className=" pb-8">
          <ConnectionDropdown />
        </div>
      )}
      {(budgetType === 'cwv' ||
        (budgetType === 'asset' && connectionSpeed !== 0)) && <ButtonBar />}
    </div>
  );
}