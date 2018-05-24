/*
 * @Author: jianxi_lin 
 * @Date: 2018-05-24 16:49:22 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-05-24 17:53:23
 */
import React from 'react'
import { initStore }  from '../redux/store'
import withRedux from 'next-redux-wrapper'
import Layout from "../layout/BasicLayout";
import About from './about'
import Head from 'next/head'
import { red } from '../redux/actions/red'
import fetch from "isomorphic-unfetch";

class Home extends React.Component {
    static async getInitialProps({pathname, query, req, xhr}) {
        const res = await fetch('http://114.67.143.209:3002/api/getRed')
        const data = await res.json()
        console.log(`show data fetched . Count : ${data.length}`)
        return {
            shows: data
        }
    }
    componentDidMount() {

    }
    componentWillMount() {

    }
    cows() {
        var html = ''
        if (JSON.stringify(this.props.getRedState.data) == '{}') {
          html += `<tr></tr>`
        } else {
          this.props.getRedState.data.hot.map(function (item, index) {
            html += `<tr key=${index}><td > ${index} </td></tr> `
          })
        }
        return html
      }
    render() {
        var createMarkup = function () {
            return { __html: this.cows() }
          }.bind(this);
        return (
            <Layout title={`图书商城`}>
                <Head>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <About>                    
                </About>
                <div className="btn" onClick={() => this.props.getRed()}>领取</div>
                <table>
                    <tbody dangerouslySetInnerHTML={createMarkup()}>
                    </tbody>
                </table>
            </Layout>
        )
    }
}

 const mapStateToProps = (state) => {   
    return {
        getRedState: state.red,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {      
        getRed: () => {
            dispatch(red())
        }
    }
}
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Home)