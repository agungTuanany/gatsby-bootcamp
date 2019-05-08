import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

/* component */
import Layout from '../components/layout'
import Head from '../components/head'

/* scss */
import blogStyles from './blog.module.scss'

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: {
          fields: slug,
          order: ASC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Hello, </h1>
      <h2> THIS IS BLOG PAGE</h2>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, index) => {
          return (
            <li key={index} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
