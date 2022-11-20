import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/compounds/hero'
import ConnectionDropdown from '../components/compounds/connection-dropdown'
import Footer from '../components/compounds/footer'
import Stepper from '../components/compounds/stepper'
import BudgetType from '../components/modules/select-budget-type'
import BudgetConfiguration from '../components/modules/budget-configuration'


import { selectStep, selectBudgetType } from "../store/budgetSlice";
import { useSelector } from "react-redux";
import PreviewBudget from '../components/modules/preview-budget'
import DownloadBudget from '../components/modules/download-budget'

const Home: NextPage = () => {
  const step = useSelector(selectStep);
  const budgetType = useSelector(selectBudgetType);
  return (
    <>
      <Hero title1="Set targets for your" title2="websites performance" buttonLink="#get-started" buttonTitle="Get Started" />
      <div className="bg-slate-200 p-14 text-gray-600">
        <div className="mx-auto max-w-7xl">
          <Stepper />
          {step === 1 && <BudgetType />}
          {step === 2 && <BudgetConfiguration />}
          {step === 3 && <PreviewBudget />}
          {step === 4 && <DownloadBudget />}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
