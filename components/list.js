/*
 * @Author: jianxi_lin 
 * @Date: 2018-05-28 16:19:52 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-05-31 10:41:58
 */
import Link from "next/link";
import Head from 'next/head'
import css from '../styles/list.scss'
const List = () => (
    <div>   
        {/* <Head>
            <link rel="stylesheet" href="/styles/list.scss" />              
        </Head>     */}
        <div id="list-main">
            <div id="guessLike" className="guess-like">
                <dl className="list">
                    <dd>
                        <a href="//meishi.meituan.com/i/deal/49096106" className="react ">
                            <div className="dealcard" data-did="49096106">
                                <div className="dealcard-img imgbox">
                                    <img src="//p1.meituan.net/200.0/deal/180b72a7503b4fee4da6c654423e2520290317.jpg@423_0_1411_1411a%7C267h_267w_2e_90Q" />
                                </div>
                                <div className="dealcard-block-right">
                                    <div className="dealcard-brand single-line">饭先森</div>

                                    <div className="title text-block">[2店通用]主食2选1，提供免费WiFi</div>
                                    <div className="price">
                                        <span className="strong">12.9</span><span className="strong-color">元</span>
                                        <del>35元</del>
                                        <span className="line-right">
                                            已售1170
	                                </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </dd>
                    <dd>
                        <a href="//meishi.meituan.com/i/deal/50826984" className="react ">
                            <div className="dealcard" data-did="50826984">
                                <div className="dealcard-img imgbox" data-src="//p0.meituan.net/100.0/deal/f52721c44ac0a791b5d366823eaaf747890176.jpg@500_0_1667_1667a%7C267h_267w_2e_90Q" data-src-high="//p0.meituan.net/200.0/deal/f52721c44ac0a791b5d366823eaaf747890176.jpg@500_0_1667_1667a%7C267h_267w_2e_90Q" data-com="unveil">
                                    <img src="//p0.meituan.net/200.0/deal/f52721c44ac0a791b5d366823eaaf747890176.jpg@500_0_1667_1667a%7C267h_267w_2e_90Q" /></div>
                                <div className="dealcard-block-right">
                                    <div className="dealcard-brand single-line">汉堡王</div>

                                    <div className="title text-block">[上海等]炫辣鸡腿堡1份</div>
                                    <div className="price">
                                        <span className="strong">10</span><span className="strong-color">元</span>
                                        <del>17元</del>
                                        <span className="line-right">
                                            已售63801
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </dd>
                    <dd>
                        <a href="//meishi.meituan.com/i/deal/49630454" data-stid="081153232802528897314002980212735700434_c2_e366ed8acff30a5c2abe342e36b689fb0" gaevent="imt/homepage/guess" className="react ">
                            <div className="dealcard" data-did="49630454">
                                <div className="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/82b62ecd95a2bac157d56ac208d7e182108764.jpg@38_0_1080_1080a%7C267h_267w_2e_90Q" data-src-high="//p1.meituan.net/200.0/deal/82b62ecd95a2bac157d56ac208d7e182108764.jpg@38_0_1080_1080a%7C267h_267w_2e_90Q" data-com="unveil"><img src="//p1.meituan.net/200.0/deal/82b62ecd95a2bac157d56ac208d7e182108764.jpg@38_0_1080_1080a%7C267h_267w_2e_90Q" /></div>
                                <div className="dealcard-block-right">
                                    <div className="dealcard-brand single-line">今牛座潮汕鲜牛火锅</div>

                                    <div className="title text-block">[人民广场/南京路]超值单人套餐，提供免费WiFi</div>
                                    <div className="price">
                                        <span className="strong">18</span><span className="strong-color">元</span>
                                        <del>88元</del>
                                        <span className="line-right">
                                            已售780
	                                </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </dd>
                    <dd>
                        <a href="//meishi.meituan.com/i/deal/50345949" data-stid="081153232802528897314002980212735700434_c8_e366ed8acff30a5c2abe342e36b689fb0" gaevent="imt/homepage/guess" className="react ">
                            <div className="dealcard" data-did="50345949">
                                <div className="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/681f6f96b75eb9d102d36f8accf8cb8960618.jpg@120_0_400_400a%7C267h_267w_2e_100q" data-src-high="//p1.meituan.net/200.0/deal/681f6f96b75eb9d102d36f8accf8cb8960618.jpg@120_0_400_400a%7C267h_267w_2e_100q" data-com="unveil"><img src="//p1.meituan.net/200.0/deal/681f6f96b75eb9d102d36f8accf8cb8960618.jpg@120_0_400_400a%7C267h_267w_2e_100q" /></div>
                                <div className="dealcard-block-right">
                                    <div className="dealcard-brand single-line">俏江南</div>

                                    <div className="title text-block">[5店通用]双人套餐，提供免费WiFi</div>
                                    <div className="price">
                                        <span className="strong">198</span><span className="strong-color">元</span>
                                        <del>592元</del>
                                        <span className="line-right">
                                            已售585
	                                </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </dd>
                </dl>
            </div>
            {/* <style jsx>
            {`@import 'styles/list.scss';`}
        </style> */}
        </div>
    </div>

)

export default List