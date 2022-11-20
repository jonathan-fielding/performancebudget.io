import { Fragment } from 'react'

const navigation = [
  { name: 'Performance Budget Calculator', href: '/' },
  { name: 'Performance Resources', href: '/resources' },
]

export default function BudgetCard({
  title, description, onBudgetClick, selected
}) {
  let classes = 'p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700 text-left';
  if (selected) {
    classes = `${classes} shadow-inner text-indigo-600`
  } else  {
    classes = `${classes} hover:bg-slate-100 hover:shadow-md`
  }


  return (
    <button onClick={onBudgetClick} className={classes}>
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p>
          {description}
      </p>
    </button>
  )
}
