import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MusicPage = () => (
  <Layout>
    <SEO title="Music" />
    <h1>The Music Page</h1>
    <p>Here is where music is</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MusicPage
