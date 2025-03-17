import Giscus from '@giscus/react';


export default function Comment() {
  return (
    <Giscus
      id="comments"
      repo="geeinks/learn"
      repoId="R_kgDOMtx6vQ"
      category="Q&A"
      categoryId="DIC_kwDOMtx6vc4CntrG"
      mapping="pathname"
      strict="0"
      term="comments here"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme="cobalt"
      lang="en"
      crossorigin="anonymous"
      loading="lazy"
    />
  );
}