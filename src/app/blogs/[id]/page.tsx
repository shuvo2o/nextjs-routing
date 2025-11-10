import React from 'react'

const BlogsDetailspage = async ({params}: {params: Promise<{id: string}> }) => {
  const {id} = await params;
  return (
    <div>
        <h1>Blog Details Page: {id}</h1>
    </div>
  )
}

export default BlogsDetailspage
