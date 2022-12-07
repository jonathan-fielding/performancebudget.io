import { BudgetLineItems } from '../types/budget';
import { LighthouseType } from '../types/enums';

const BUDGET_LINE_ITEMS: BudgetLineItems = {
  asset: [
    {
      label: 'HTML',
      name: 'document',
      suggested: 2500,
      min: 0,
      max: 5000,
      unit: 'kB',
      type: LighthouseType.resourceSizes,
    },
    {
      label: 'CSS',
      name: 'stylesheet',
      suggested: 100,
      min: 0,
      max: 500,
      unit: 'kB',
      type: LighthouseType.resourceSizes,
    },
    {
      label: 'JavaScript',
      name: 'script',
      suggested: 100,
      min: 0,
      max: 1,
      unit: 'kB',
      type: LighthouseType.resourceSizes,
    },
    {
      label: 'Images',
      name: 'image',
      suggested: 100,
      min: 0,
      max: 1,
      unit: 'kB',
      type: LighthouseType.resourceSizes,
    },
    {
      label: 'Video',
      name: 'media',
      suggested: 100,
      min: 0,
      max: 1,
      unit: 'kB',
      type: LighthouseType.resourceSizes,
    },
    {
      label: 'Fonts',
      name: 'font',
      suggested: 100,
      min: 0,
      max: 1,
      unit: 'kB',
      type: LighthouseType.resourceSizes,
    },
  ],
  cwv: [
    {
      label: 'LCP',
      name: 'largest-contentful-paint',
      suggested: 2500,
      min: 0,
      max: 5000,
      unit: 'ms',
      type: LighthouseType.timings,
    },
    {
      label: 'FID',
      name: 'max-potential-fid',
      suggested: 100,
      min: 0,
      max: 500,
      unit: 'ms',
      type: LighthouseType.timings,
    },
    {
      label: 'CLS',
      name: 'cumulative-layout-shift',
      suggested: 0.1,
      min: 0,
      max: 1,
      step: 0.01,
      unit: '',
      type: LighthouseType.timings,
    },
  ],
};

export default BUDGET_LINE_ITEMS;
