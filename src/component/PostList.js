import React, { useContext } from 'react';
import { BlogContext } from './Context';
import { Link } from 'react-router-dom';
import './App.css'

const PostList = () => {
  const { posts } = useContext(BlogContext);

  return (
    <div className='ld1'>
    <h1>Blog List</h1>
      {posts.map((post, index) => (
        <div key={index} className='ld2'>
                  <Link to="/postcontent"><h2>{post.title}</h2></Link>
            
        </div>
      ))}
    </div>
  );
};

export default PostList;
