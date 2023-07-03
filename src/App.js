
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BlogProvider } from './component/Context';
import PostForm from './component/PostForm';
import PostList from './component/PostList';
import PostContent from './component/PostContent';


const App = () => {
  return (
   
      <BlogProvider>
        <Routes>
         
          <Route path="/" element={<PostForm />} />
          <Route path="/postlist" element={<PostList />} />
          <Route path="/postcontent" element={<PostContent />} />

        </Routes>
      </BlogProvider>
   
  );
};

export default App;

