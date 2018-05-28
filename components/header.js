import Link from "next/link";
import Head from 'next/head'
import '../styles/header.scss'
const Header = () => (
    <div>
        <Head>
            <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <header className="navbar">
            <div className="nav-wrap-left">
                <a gaevent="imt/hd/cityBottom" href="//i.meituan.com/index/changecity" className="react">
                    <span className="nav-city">上海<space></space><i className="text-icon icon-downarrow"></i></span>
                </a>
            </div>
            <div className="box-search J-box-search">
                <a gaevent="imt/homepage/search" className="react" href="//i.meituan.com/s/shanghai">
                    <i className="icon-search text-icon">⌕</i>
                    <span className="single-line">
                        输入商家/品类/商圈
	                    	</span>
                </a>
            </div>
            <div className="nav-wrap-right">
                <a className="react" gaevent="imt/homepage/mine" rel="nofollow" href="//i.meituan.com/account/">
                    <span className="nav-btn">
                        <i className="text-icon">⍥</i>我的
                    </span>
                </a>
            </div>
        </header>
    </div>
)
export default Header