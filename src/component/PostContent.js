import React, { useContext } from 'react';
import { BlogContext } from './Context';
import { Link } from 'react-router-dom';

const PostContent = () => {
  const { posts } = useContext(BlogContext);

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
       <div className='c1'>   <h2>{post.title}</h2>{post.content}</div>
        
        </div>
      ))}
      <Link to="/"><button className='btnb'>Back</button></Link>
    </div>
  );
};

export default PostContent;