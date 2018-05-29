import Link from "next/link";
import Head from 'next/head'
const Banner = () => (
    <div>
        <div className="banner-download">
            <img src="//ms0.meituan.net/touch/img/download_banner.png" className="img-box" />
            <a href="{dataRedirecturl}" className="call-app-btn" id="openApp" data-url="imeituan://www.meituan.com/home/"></a>
            <a className="download-btn" id="downloadApp"></a>
        </div>
        <style jsx>
        {`
              @import 'styles/banner.scss';
        `}        
        </style>
    </div>
)

export default Banner