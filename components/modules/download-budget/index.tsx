import { Fragment } from 'react'
import { selectBudgetType, setBudgetType, setStep } from "../../../store/budgetSlice";
import { useDispatch, useSelector } from "react-redux";
import ButtonBar from '../../compounds/button-bar';

export default function DownloadBudget() {
  const budgetType = useSelector(selectBudgetType);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center'>
      <ButtonBar />
    </div>
  )
}
