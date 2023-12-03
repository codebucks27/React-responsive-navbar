import React from 'react';
import './BlogApp.css';

class BlogApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { id: 1, title: 'First Post', content: 'This is the first blog post.' },
        { id: 2, title: 'Second Post', content: 'This is the second blog post.' },
        { id: 3, title: 'Third Post', content: 'This is the third blog post.' },
        { id: 3, title: 'Third Post', content: 'This is the third blog post.' },
        { id: 3, title: 'Third Post', content: 'This is the third blog post.' },
        { id: 3, title: 'Third Post', content: 'This is the third blog post.' },
        { id: 3, title: 'Third Post', content: 'This is the third blog post.' }



      ]
    };
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="blog-container">
        <h1 className="blog-title">My Blog</h1>
        {posts.map(post => (
          <div key={post.id} className="blog-post">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BlogApp;