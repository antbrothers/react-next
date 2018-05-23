
import Link from "next/link";
import Layout from "../components/myLayout";
import fetch from "isomorphic-unfetch";
const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`} prefetch>
            <a>{props.title}</a>
        </Link>
    </li>
)

const Index = (props) => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            {props.shows.map(({ show }) => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
            <PostLink id="hello-nextjs"
                title="Hello Next.js" />
            <PostLink id="learn-nextjs"
                title="Learn Next.js is awesome" />
            <PostLink id="deploy-nextjs"
                title="Deploy apps with Zeit" />
        </ul>
        <style jsx>{`
            h1, a {
                font-family: "Arial";
            }
            ul {
                padding: 0;
            }
            li {
                list-style: none;
                margin: 5px 0;
            }
            a {
                text-decoration: none;
                color: blue;
            }
            a:hover {
                opacity: 0.6;
            }
    `}</style>
    </Layout>
)

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    console.log(`show data fetched . Count : ${data.length}`)
    return {
        shows: data
    }
}

export default Index