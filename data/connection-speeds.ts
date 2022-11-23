interface ConnectionSpeed {
  name: string;
  speed: number;
}

export const CONNECTION_SPEEDS: ConnectionSpeed[] = [
  {
    name: 'Mobile 2G - Slow (35 Kbps)',
    speed: 4.375,
  },
  {
    name: '56K Dial-Up (49Kbps)',
    speed: 7,
  },
  {
    name: 'Mobile 2G - Fast (150 Kbps)',
    speed: 18.75,
  },
  {
    name: 'Mobile Edge (240 Kbps)',
    speed: 30,
  },
  {
    name: 'Mobile 3G - Slow (780 Kbps)',
    speed: 96,
  },
  {
    name: 'DSL (1.5Mbps)',
    speed: 187.5,
  },
  {
    name: 'Mobile 3G - Fast (1.6 Mbps)',
    speed: 200,
  },
  {
    name: 'Cable (5Mbps)',
    speed: 625,
  },
  {
    name: 'FIOS (20Mbps)',
    speed: 2500,
  },
];
