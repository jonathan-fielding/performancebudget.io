const posts = [
  {
    key: 1,
    title: 'Start Performance Budgeting',
    description:
      'If you\'re building a web experience and want to stay fast, a performance budget can be critical. For success, embrace performance budgets and learn to live within them. Network & CPU limits on mobile can require asking hard questions like, "what is really important to my users?"',
    author: 'Addy Osmani',
    path: 'https://addyosmani.com/blog/performance-budgets/',
    tags: ['all', 'budget'],
    postDate: '01 Oct 2018',
  },
  {
    key: 2,
    title: 'Performance budgets 101',
    description:
      "Performance is an important part of the user experience and it affects business metrics. It's tempting to think that if you are a good developer you'll end up with a performant site, but the truth is that good performance is rarely a side effect. As with most other things—to reach a goal you have to define it clearly. Start the journey by setting a performance budget.",
    author: 'Milica Mihajlija',
    path: 'https://web.dev/performance-budgets-101/',
    tags: ['all', 'budget'],
    postDate: '05 Nov 2018',
  },
  {
    key: 3,
    title: 'Incorporate performance budgets into your build process',
    description:
      "Once you've defined a performance budget, it's time to set up the build process to keep track of it. There are a number of tools that let you define thresholds for chosen performance metrics and warn you if you go over budget. Find out how to choose one that best fits your needs and current setup.",
    author: 'Milica Mihajlija',
    path: 'https://web.dev/incorporate-performance-budgets-into-your-build-tools/',
    tags: ['all', 'budget'],
    postDate: '01 Feb 2019',
  },
  {
    key: 4,
    title: 'Can You Afford It?: Real-world Web Performance Budgets',
    description:
      'We\'ve had the pleasure of working with dozens of teams over the past few years. This work has been illuminating, sometimes in very unexpected ways. One of the most surprising results has been the frequent occurrence of "ambush by JavaScript"',
    author: 'Alex Russell',
    path: 'https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/',
    tags: ['all', 'budget'],
    postDate: '22 Oct 2017',
  },
  {
    key: 5,
    title: 'How to test frontend performance - Gov UK',
    description:
      'Websites that perform badly can frustrate users and drain their data plans and battery life. You can address this by making sure your service frontend is as fast and lightweight as possible.',
    author: 'Gov.uk',
    path: 'https://www.gov.uk/service-manual/technology/how-to-test-frontend-performance',
    tags: ['all', 'budget'],
    postDate: '14 Mar 2019',
  },
  {
    key: 6,
    title: 'Web Vitals',
    description:
      "Optimizing for quality of user experience is key to the long-term success of any site on the web. Whether you're a business owner, marketer, or developer, Web Vitals can help you quantify the experience of your site and identify opportunities to improve.",
    author: 'Philip Walton',
    path: 'https://web.dev/vitals/',
    tags: ['all', 'cwv'],
    postDate: '30 Apr 2020',
  },
  {
    key: 7,
    title: 'Optimize Largest Contentful Paint',
    description:
      'A step-by-step guide on how to break down LCP and identify key areas to improve.',
    author: 'Philip Walton',
    path: 'https://web.dev/optimize-lcp/',
    tags: ['all', 'cwv'],
    postDate: '05 May 2020',
  },
  {
    key: 8,
    title: 'Optimize First Input Delay',
    description:
      'A step-by-step guide on how to respond faster to user interactions',
    author: 'Houssein Djirdeh',
    path: 'https://web.dev/optimize-fid/',
    tags: ['all', 'cwv'],
    postDate: '05 May 2020',
  },
  {
    key: 9,
    title: 'Optimize Cumulative Layout Shift',
    description:
      'Learn how to avoid sudden layout shifts to improve user-experience',
    author: 'Addy Osmani & Barry Pollard',
    path: 'https://web.dev/optimize-cls/',
    tags: ['all', 'cwv'],
    postDate: '05 May 2020',
  },
  {
    key: 10,
    title: 'How Netflix learnt to keep an eye on the cost of JavaScript',
    description:
      'A case study into how Netflix improved their web performance of their homepage on desktop by starting to be more mindful of the cost of JavaScript',
    author: 'Addy Osmani',
    path: 'https://medium.com/dev-channel/a-netflix-web-performance-case-study-c0bcde26a9d9',
    tags: ['all', 'case-study'],
    postDate: '05 Nov 2018',
  },
  {
    key: 11,
    title: 'Yelp boosted user conversion by 15% with their performance wins',
    description:
      'A case study into how Yelp improving their First Contentful Paint by 45% and Page Complete by 25% resulted in a 15% improvement in conversion',
    author: 'Shubham Gupta',
    path: 'https://engineeringblog.yelp.com/2021/01/boosting-user-conversion-with-ux-performance-wins.html',
    tags: ['all', 'case-study'],
    postDate: '27 Jan 2021',
  },
  {
    key: 12,
    title: 'How QuintoAndar improved their Lighthouse performance score to 97',
    description:
      'TK takes us through a case study from his time at QuintoAndar about how they optimised the performance of a React progressive web app',
    author: 'TK',
    path: 'https://www.iamtk.co/optimizing-the-performance-of-a-react-progressive-web-app',
    tags: ['all', 'case-study'],
    postDate: '04 Apr 2021',
  },
];

export default posts;
