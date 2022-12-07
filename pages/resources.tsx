/* eslint-disable react/jsx-props-no-spreading */
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
      (a, b) => new Date(b.postDate).getTime() - new Date(a.postDate).getTime()
    );

  return (
    <>
      <Head>
        <title>Web Performance Resources - Performance Budget</title>
      </Head>
      <Hero title1="Learn about" title2="web performance" />
      <div className="bg-slate-200 py-8">
        <div className="flex flex-col-reverse md:grid md:grid-cols-3 mx-auto max-w-7xl px-8">
          <div className="lg:grid lg:grid-cols-2 gap-8 mx-auto max-w-7xl col-span-2">
            {filteredPosts.map((post) => (
              <div className="mb-8 lg:mb-0 md:flex">
                <Card {...post} key={post.key} />
              </div>
            ))}
          </div>
          <div className="md:pl-8">
            <ResourceFilter />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
