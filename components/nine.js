import Link from "next/link";
import Head from 'next/head'
import '../styles/nine.scss'
const Nine = () => (
    <div>
        <Head>
            <link rel="stylesheet" href="/_next/static/nine.css" />
        </Head>
        <div class="nine-main">
            <dl class="list list-in">
                <dd class="icon-wrapper h_gesture_">
                    <ul class="icon-list page current" >
                        <li class="icon">
                            <a gaevent="imt/homepage/category1/1" data-stid_b="1" href="//meishi.meituan.com/i/?ci=10">
                            <img src={'../static/images/1.png'} className="a_img" />
                                <span class="icon-desc">美食</span>
                            </a>
                        </li>
                    </ul>
                    <ul class="list-ico list">
                        <li class="active"></li>
                        <li class=""></li>
                    </ul>
                </dd>
            </dl>
        </div>
    </div>

)
export default Nine