import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Bogblog</h1>
    <p>AtB news, stews, and clues</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPage
