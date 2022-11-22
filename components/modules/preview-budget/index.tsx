import {
  selectBudgetType,
  selectBudgetValues,
  selectTotalBytes,
} from '../../../store/budgetSlice';
import { useDispatch, useSelector } from 'react-redux';
import ButtonBar from '../../compounds/button-bar';

export default function PreviewBudget() {
  const budgetValues = useSelector(selectBudgetValues);
  const budget = useSelector(selectTotalBytes);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-gray-700 font-bold text-xl sm:text-2xl">
        Asset Sizes
      </h2>
      <p className="pb-6 text-gray-700">
        The sizes you selected for your budget.
      </p>

      <div className="overflow-x-auto pb-6 text-gray-200">
        <table className="table w-full">
          <thead>
            <tr>
              {budgetValues.map((budgetValue, index) => {
                return (
                  <th key={index} className="px-4 py-2 text-left text-white">
                    {budgetValue.name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {budgetValues.map((budgetValue, index) => {
                return <td key={index}>{budgetValue.userValue}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>

      <p className="pb-6 text-lg">Total asset size: {budget}Kb</p>

      <h2 className="text-gray-700 font-bold text-xl sm:text-2xl">
        Estimated load times
      </h2>
      <p className="pb-6 text-gray-700">
        The load times of your chosen budget across different internet
        connection speeds.
      </p>

      <div className="overflow-x-auto pb-8 text-gray-200">
        <table className="table  w-full">
          <thead>
            <tr>
              <th>Connection Type</th>
              <th>Time (secs)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Mobile 2G - Slow (35 Kbps)</th>
              <td>15.31 secs</td>
            </tr>
            <tr>
              <th>56K Dial-Up (49Kbps)</th>
              <td>9.57 secs</td>
            </tr>
            <tr>
              <th>Mobile 2G - Fast (150 Kbps)</th>
              <td>3.57 secs</td>
            </tr>
            <tr>
              <th>Mobile Edge (240 Kbps)</th>
              <td>2.23 secs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ButtonBar />
    </div>
  );
}
