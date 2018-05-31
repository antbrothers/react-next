import Link from "next/link";
import Head from 'next/head'
import '../styles/category.scss'
const Category = () => (
    <div id="category">        
        <dl className="list" id="daogou">
            <dd className="dd-padding">
                <a className="react" href="//i.meituan.com/firework/guide" gaevent="imt/homepage/homeguide1" rel="nofollow">
                    <span className="info">
                        <strong>我们约吧</strong>
                        <div className="dec">恋人家人好朋友</div>
                    </span>
                    <span className="imgbox" data-com="unveil" data-src="//p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png">
                        <img src="//p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png" />
                    </span>
                </a>
                <a className="react huilife" href="//i.meituan.com/topic/huilife" gaevent="imt/homepage/homeguide3" rel="nofollow">
                    <span className="info">
                        <strong>低价超值</strong>
                        <div className="dec">十元惠生活</div>
                    </span>
                    <span className="imgbox" data-com="unveil" data-src="//p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg">
                        <img src="//p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg"/>
                    </span>
                </a>
                <a className="react scense" href="//i.meituan.com/topic/scene/5" gaevent="imt/homepage/homeguide4" rel="nofollow">
                    <span className="info">
                        <strong>午后时光</strong>
                        <div className="dec">懒懒下午茶</div>
                    </span>
                    <span className="imgbox" data-com="unveil" data-src="//p0.meituan.net/mmc/dfa8039a207553b414db7b32614109cb7779.png">
                        <img src="//p0.meituan.net/mmc/dfa8039a207553b414db7b32614109cb7779.png"/>
                    </span>
                </a>
            </dd>
        </dl>
        {/* <style>
            {`
              @import 'styles/category.scss';
            `}
        </style> */}
    </div>
)
export default Category