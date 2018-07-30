import React from 'react'
import Head from 'next/head'
import flexible from '../utils/flexible'
import "../styles/common.scss"
export default class BasicLayout extends React.Component {
    componentDidMount() {
        flexible(window, document)
    }
    render() {
        const { children, title = 'This is the defalt title' } = this.props
        return (
            <div>
                <Head>
                    <title>{title}</title>
                    <meta charSet='utf-8' />
                    <meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, width=device-width, user-scalable=no" />  
                    <link rel="stylesheet" href="/_next/static/style.css" />                                               
                </Head>
                {children}                
            </div>
        )
    }
}