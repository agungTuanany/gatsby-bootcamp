import React from 'react'
import { graphql } from 'gatsby'

/* components */
import Layout from '../components/layout'

export const query = graphql `
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        author
      }
      html
    }
  }
`
const BlogTemplate = (props) => {
  return (
    <Layout>
      {/* data in props.data it's mean the respons */}
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <h4>author, {props.data.markdownRemark.frontmatter.author}</h4>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
    </Layout>

  )
}

export default BlogTemplate
