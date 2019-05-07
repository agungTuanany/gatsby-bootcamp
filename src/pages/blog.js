import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

/* component */
import Layout from '../components/layout'

/* scss */
import blogStyles from './blog.module.scss'

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log(data);

  return (
    <Layout>
      <h1>Hello, </h1>
      <h2> THIS IS BLOG PAGE</h2>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge, index) => {
          return (
            <li key={index} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.fields.slug}</h2>
                <p>{edge.node.frontmatter.date}</p>
                <p>created by, {edge.node.frontmatter.author}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
