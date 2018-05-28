import Link from "next/link";
import Head from 'next/head'
import '../styles/banner.scss'

const Banner = () => (
    <div>
        <Head>
            <link rel="stylesheet" href="/_next/static/banner.css" />
        </Head>
        <div className="banner-download">
            <img src="//ms0.meituan.net/touch/img/download_banner.png" className="img-box" />
            <a href="{dataRedirecturl}" className="call-app-btn" id="openApp" data-url="imeituan://www.meituan.com/home/"></a>
            <a className="download-btn" id="downloadApp"></a>
        </div>
    </div>
)

export default Banner