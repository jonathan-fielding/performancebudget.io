import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
  },
}));

const RelatedArticles: React.FC = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <h1>Related Articles</h1>
      <p>Since the original launch of this website there has been many articles arround performance budgets, many even linking to this tool and with the rebuild of this site I wanted to capture these here:</p>
    
      <hr />

      <article>
        <h3><a href="https://addyosmani.com/blog/performance-budgets/">Start Performance Budgeting</a></h3>
        <blockquote>If you're building a web experience and want to stay fast, a performance budget can be critical. For success, embrace performance budgets and learn to live within them. Network &amp; CPU limits on mobile can require asking hard questions like, "what is really important to my users?"</blockquote>
        <cite><a href="https://addyosmani.com">Addy Osmani</a></cite>
      </article>

      <hr />

      <article>
        <h3><a href="https://web.dev/performance-budgets-101/">Performance budgets 101</a></h3>
        <blockquote>Performance is an important part of the user experience and it affects business metrics. It's tempting to think that if you are a good developer you'll end up with a performant site, but the truth is that good performance is rarely a side effect. As with most other things—to reach a goal you have to define it clearly. Start the journey by setting a performance budget.</blockquote>
        <cite><a href="https://github.com/mihajlija">Milica Mihajlija</a></cite>
      </article>

      <hr />

      <article>
        <h3><a href="https://web.dev/incorporate-performance-budgets-into-your-build-tools/">Incorporate performance budgets into your build process</a></h3>
        <blockquote>Once you've defined a performance budget, it's time to set up the build process to keep track of it. There are a number of tools that let you define thresholds for chosen performance metrics and warn you if you go over budget. Find out how to choose one that best fits your needs and current setup.</blockquote>
        <cite>Article does not specify author</cite>
      </article>

      <hr />
    </div>
  );
}

export default RelatedArticles;
        