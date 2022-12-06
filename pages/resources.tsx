import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Card from '../components/compounds/card';
import Footer from '../components/compounds/footer';
import Hero from '../components/compounds/hero';
import ResourceFilter from '../components/compounds/resource-filter';

import { selectFilterValue } from '../store/resourcesSlice';
import posts from '../data/posts';

function Blog() {
  const filter = useSelector(selectFilterValue);
  const filteredPosts = posts
    .filter((post) => post.tags.includes(filter || ''))
    .sort(
      (a, b) => new Date(b.postDate).getTime() - new Date(a.postDate).getTime(),
    );

  return (
    <>
      <Head>
        <title>Web Performance Resources - Performance Budget</title>
      </Head>
      <Hero title1="Learn about" title2="web performance" />
      <div className="bg-slate-200 p-14">
        <ResourceFilter />
        <div className="grid grid-cols-2 gap-8 mx-auto max-w-7xl">
          {filteredPosts.map((post) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Card {...post} key={post.key} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
