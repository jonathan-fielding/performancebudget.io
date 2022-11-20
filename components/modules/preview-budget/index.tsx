import { Fragment } from 'react'
import { selectBudgetType, setBudgetType, setStep } from "../../../store/budgetSlice";
import { useDispatch, useSelector } from "react-redux";
import ButtonBar from '../../compounds/button-bar';

export default function PreviewBudget() {
  const budgetType = useSelector(selectBudgetType);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center'>
      <h2 className="text-gray-700 font-bold text-xl sm:text-2xl">Asset Sizes</h2>
      <p className="pb-6 text-gray-700">The sizes you selected for your budget.</p>

      <div className="overflow-x-auto pb-8 text-gray-200">
        <table className="table w-full">
          <thead>
            <tr>
              <th>HTML</th>
              <th>CSS</th>
              <th>JavaScript</th>
              <th>Images</th>
              <th>Video</th>
              <th>Fonts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10Kb</td>
              <td>10Kb</td>
              <td>10Kb</td>
              <td>10Kb</td>
              <td>10Kb</td>
              <td>10Kb</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-gray-700 font-bold text-xl sm:text-2xl">Estimated load times</h2>
      <p className="pb-6 text-gray-700">The load times of your chosen budget across different internet connection speeds.</p>

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
  )
}
