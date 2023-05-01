import React from 'react'
import BlogHeader from '../../components/blogHeader/blogHeader';
import "./blog.css";
import BlogFooter from '../../components/BlogFooter/BlogFooter';
import Footer from '../../components/footer/footer';

function Blog() {
  return (
    <div>
      <BlogHeader />
      <BlogFooter/>
      {/* <Footer /> */}
    </div>
  );
}

export default Blog
