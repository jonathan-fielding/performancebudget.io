interface ConnectionSpeed {
  id: number;
  name: string;
  value: number;
  show: boolean;
}

const CONNECTION_SPEEDS: ConnectionSpeed[] = [
  {
    id: 0,
    name: 'Select a speed which reflects your websites audience',
    value: 0,
    show: false,
  },
  {
    id: 1,
    name: 'Mobile 2G - Slow (35 Kbps)',
    value: 4.375,
    show: true,
  },
  {
    id: 2,
    name: '56K Dial-Up (49Kbps)',
    value: 7,
    show: true,
  },
  {
    id: 3,
    name: 'Mobile 2G - Fast (150 Kbps)',
    value: 18.75,
    show: true,
  },
  {
    id: 4,
    name: 'Mobile Edge (240 Kbps)',
    value: 30,
    show: true,
  },
  {
    id: 5,
    name: 'Mobile 3G - Slow (780 Kbps)',
    value: 96,
    show: true,
  },
  {
    id: 6,
    name: 'DSL (1.5Mbps)',
    value: 187.5,
    show: true,
  },
  {
    id: 7,
    name: 'Mobile 3G - Fast (1.6 Mbps)',
    value: 200,
    show: true,
  },
  {
    id: 8,
    name: 'Cable (5Mbps)',
    value: 625,
    show: true,
  },
  {
    id: 9,
    name: 'FIOS (20Mbps)',
    value: 2500,
    show: true,
  },
  // {
  //   id: 10,
  //   name: 'Custom',
  //   value: 999999999999,
  //   show: false,
  // },
];

export default CONNECTION_SPEEDS;
