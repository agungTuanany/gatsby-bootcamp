import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

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
      <ol>
        {data.allMarkdownRemark.edges.map((edge, index) => {
          return (
            <li key={index}>
              <h2>
                <Link to={`/blog/${edge.node.fields.slug}`}>{edge.node.fields.slug}</Link>
              </h2>
              <p>{edge.node.frontmatter.date}</p>
              <p>created by, {edge.node.frontmatter.author}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
