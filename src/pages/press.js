import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PressPage = () => (
  <Layout>
    <SEO title="Press" />
    <h1>Press</h1>
    <p>"Yep it's press" - A Press Outlet</p>
    <p>"I mean it is not not press" - A Different Press Outlet</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PressPage
