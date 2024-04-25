import React from 'react'
import blog from '../data/blogs'

function Blog() {
  return (
    <div>
      <h1>Welcome to my blog</h1>

      <body> You never have to ask me what I want to eat, it's always going to be the same answer.</body>
      <div>I always want the same foods in the same order.</div>
      
      <div className="p-5">
      <ol>
        <li>Sushi</li>
        <li>Mexican</li>
        <li>Thai</li>
        <li>Sandwiches</li>
        <li>Pizza</li>
        <li>Burgers</li>
      </ol>
      </div>
      

      <body> {blog.map} </body>
    </div>

    
  )
}

export default Blog


  