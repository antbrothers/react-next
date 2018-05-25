import Link from "next/link";
import Head from 'next/head'
import '../styles/header.scss'
const Header = () => (
    <div>
        <Head>
            <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <header class="navbar">
            <div class="nav-wrap-left">
                <a gaevent="imt/hd/cityBottom" href="//i.meituan.com/index/changecity" class="react">
                    <span class="nav-city">上海<space></space><i class="text-icon icon-downarrow"></i></span>
                </a>
            </div>
            <div class="box-search J-box-search">
                <a gaevent="imt/homepage/search" class="react" href="//i.meituan.com/s/shanghai">
                    <i class="icon-search text-icon">⌕</i>
                    <span class="single-line">
                        输入商家/品类/商圈
	                    	</span>
                </a>
            </div>
            <div class="nav-wrap-right">
                <a class="react" gaevent="imt/homepage/mine" rel="nofollow" href="//i.meituan.com/account/">
                    <span class="nav-btn">
                        <i class="text-icon">⍥</i>我的
                    </span>
                </a>
            </div>
        </header>
    </div>
)
export default Header