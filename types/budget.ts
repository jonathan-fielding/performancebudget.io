import { BudgetTypes, LighthouseType } from './enums';

export interface BudgetLineItem {
  label: String;
  name: string;
  suggested: number;
  min: number;
  max: number;
  step?: number;
  userValue?: number;
  unit: string;
  type: LighthouseType;
}

export interface BudgetLineItems {
  [BudgetTypes.asset]: BudgetLineItem[];
  [BudgetTypes.cwv]: BudgetLineItem[];
}
