import React from 'react'
import { Container } from 'theme-ui'
import Layout from '../../components/Layout'


const PackageLayout = ({ children }) => (
    <Layout>
        <Container style={{marginTop: 100}} p={[3, null, 4]}>{children}</Container>
    </Layout>
)

export default PackageLayout
