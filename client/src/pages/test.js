import React, { Component } from 'react'
import SEO from '../utils/seo'

export default class test extends Component {
    render() {
        return (
            <div>
                <SEO title="Test" description="Test Description for site"/>
                <h1>Test Site</h1>
            </div>
        )
    }
}
