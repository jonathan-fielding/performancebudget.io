import type { NextPage } from 'next'
import Head from 'next/head';
import Card from '../components/compounds/card';
import Footer from '../components/compounds/footer';
import Hero from '../components/compounds/hero';
import ResourceFilter from '../components/compounds/resource-filter';

import { useSelector } from 'react-redux';
import { selectFilterValue } from '../store/resourcesSlice';

const Blog: NextPage = () => {
  const filter = useSelector(selectFilterValue);

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
  ];

  const filteredPosts = posts.filter((post) => {
    return post.tags.includes(filter || '');
  });

  return (
    <>
      <Head>
        <title>Web Performance Resources - Performance Budget</title>
      </Head>
      <Hero title1="Learn about" title2="web performance" />
      <div className="bg-slate-200 p-14">
        <ResourceFilter />
        <div className="grid grid-cols-2 gap-8 mx-auto max-w-7xl">
          {filteredPosts.map((post) => {
            return (
              <>
                <Card {...post} />
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog
