import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MerchPage = () => (
  <Layout>
    <SEO title="Merch" />
    <h1>Hi from the merch page</h1>
    <p>Tender, slow-roasted swag for your body</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MerchPage
