/*
 * @Author: jianxi_lin 
 * @Date: 2018-05-24 16:49:22 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-05-28 16:21:41
 */
import React from 'react'
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'
import Layout from "../layout/BasicLayout";
import Banner from '../components/banner'
import Header from "../components/header";
import Nine from "../components/nine"
import Category from "../components/category";
import List from "../components/list";
import { red } from '../redux/actions/red'
import fetch from "isomorphic-unfetch";

class Home extends React.Component {
    // 异步服务端渲染数据
    static async getInitialProps({ pathname, query, req, xhr }) {
        const res = await fetch('http://114.67.143.209:3002/api/getRed')
        const data = await res.json()
        console.log(`show data fetched . Count : ${data.data.hot.length}`)
        return {
            shows: data
        }
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
                <Header></Header>
                <Banner></Banner>
                <Nine></Nine>
                <div className="pad-gray"></div>
                <Category></Category>
                <div className="pad-gray"></div>
                <List></List>
                {/* <div className="btn" onClick={() => this.props.getRed()}>领取</div>
                <table>
                    <tbody dangerouslySetInnerHTML={createMarkup()}>
                    </tbody>
                </table> */}

                <style jsx>{`
                    .pad-gray {
                        width: 100%;
                        height: 20px;   
                        background: #f0efed; 
                        border-bottom: 0.5px solid #DDD8CE; 
                    }
                `}</style>
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