import React, { useContext, useState } from 'react';
import { BlogContext } from './Context';
import { useNavigate } from 'react-router-dom';
import './App.css'


const PostForm = () => {
  const { addPost } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    setTitle('');
    setContent('');
    navigate('/postlist');
  };


  return (
    <form onSubmit={handleSubmit} className='form'>
        <h2>Blog</h2>
  <br/>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br></br>
      <br/>
      <textarea
        placeholder="Enter content"
        value={content}
        onChange={(e) => setContent(e.target.value)}></textarea><br/>
<br/>      <button type='submit' className='sucess'>Post</button>
     
    </form>
  );
};

export default PostForm;
