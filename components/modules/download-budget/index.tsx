import {
  selectBudgetType,
  selectBudgetValues,
} from '../../../store/budget-slice';
import { useSelector } from 'react-redux';
import ButtonBar from '../../compounds/button-bar';
import downloadBudget from '../../../utils/download-budget';

export default function DownloadBudget() {
  const budgetValues = useSelector(selectBudgetValues);
  const budgetType = useSelector(selectBudgetType);

  return (
    <div className="flex flex-col items-center">
      <h2 className="pb-2 text-gray-700  text-xl sm:text-2xl">
        Download your budget
      </h2>
      <p className="pb-8">
        PerformanceBudget.io allows you to download your performance budget in
        the format required by Google Lighthouse.
      </p>

      <button
        className="btn btn-primary mb-8"
        onClick={() => downloadBudget(budgetType, budgetValues)}
      >
        Download
      </button>
      <ButtonBar />
    </div>
  );
}
