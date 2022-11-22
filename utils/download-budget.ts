import { saveAs } from 'file-saver';
import buildJson from './build-json';

export default function downloadBudget(budget) {
  const content = JSON.stringify(buildJson(budget));
  const filename = 'budget.json';

  const blob = new Blob([content], {
    type: 'text/plain;charset=utf-8',
  });

  saveAs(blob, filename);
}
