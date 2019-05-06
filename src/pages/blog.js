import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
/* component */
import Layout from '../components/layout'

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
      <ol>
        {data.allMarkdownRemark.edges.map((edge, index) => {
          return (
            <li key={index}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
              <p>{edge.node.frontmatter.author}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
