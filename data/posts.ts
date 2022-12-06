const posts = [
  {
    key: 1,
    title: 'Start Performance Budgeting',
    description:
      'If you\'re building a web experience and want to stay fast, a performance budget can be critical. For success, embrace performance budgets and learn to live within them. Network & CPU limits on mobile can require asking hard questions like, "what is really important to my users?"',
    author: 'Addy Osmani',
    path: 'https://addyosmani.com/blog/performance-budgets/',
    tags: ['all', 'budget'],
  },
  {
    key: 2,
    title: 'Performance budgets 101',
    description:
      "Performance is an important part of the user experience and it affects business metrics. It's tempting to think that if you are a good developer you'll end up with a performant site, but the truth is that good performance is rarely a side effect. As with most other things—to reach a goal you have to define it clearly. Start the journey by setting a performance budget.",
    author: 'Milica Mihajlija',
    path: 'https://web.dev/performance-budgets-101/',
    tags: ['all', 'budget'],
  },
  {
    key: 3,
    title: 'Incorporate performance budgets into your build process',
    description:
      "Once you've defined a performance budget, it's time to set up the build process to keep track of it. There are a number of tools that let you define thresholds for chosen performance metrics and warn you if you go over budget. Find out how to choose one that best fits your needs and current setup.",
    author: 'Milica Mihajlija',
    path: 'https://web.dev/incorporate-performance-budgets-into-your-build-tools/',
    tags: ['all', 'budget'],
  },
  {
    key: 4,
    title: 'Can You Afford It?: Real-world Web Performance Budgets',
    description:
      'We\'ve had the pleasure of working with dozens of teams over the past few years. This work has been illuminating, sometimes in very unexpected ways. One of the most surprising results has been the frequent occurrence of "ambush by JavaScript"',
    author: 'Alex Russell',
    path: 'https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/',
    tags: ['all', 'budget'],
  },
  {
    key: 5,
    title: 'How to test frontend performance - Gov UK',
    description:
      'Websites that perform badly can frustrate users and drain their data plans and battery life. You can address this by making sure your service frontend is as fast and lightweight as possible.',
    author: 'Gov.uk',
    path: 'https://www.gov.uk/service-manual/technology/how-to-test-frontend-performance',
    tags: ['all', 'budget'],
  },
  {
    key: 6,
    title: 'Web Vitals',
    description:
      "Optimizing for quality of user experience is key to the long-term success of any site on the web. Whether you're a business owner, marketer, or developer, Web Vitals can help you quantify the experience of your site and identify opportunities to improve.",
    author: 'Philip Walton',
    path: 'https://web.dev/vitals/',
    tags: ['all', 'cwv'],
  },
  {
    key: 7,
    title: 'Optimize Largest Contentful Paint',
    description:
      'A step-by-step guide on how to break down LCP and identify key areas to improve.',
    author: 'Philip Walton',
    path: 'https://web.dev/optimize-lcp/',
    tags: ['all', 'cwv'],
  },
  {
    key: 8,
    title: 'Optimize First Input Delay',
    description:
      'A step-by-step guide on how to respond faster to user interactions',
    author: 'Houssein Djirdeh',
    path: 'https://web.dev/optimize-fid/',
    tags: ['all', 'cwv'],
  },
  {
    key: 9,
    title: 'Optimize Cumulative Layout Shift',
    description:
      'Learn how to avoid sudden layout shifts to improve user-experience',
    author: 'Addy Osmani & Barry Pollard',
    path: 'https://web.dev/optimize-cls/',
    tags: ['all', 'cwv'],
  },
];

export default posts;
