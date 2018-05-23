import Layout from '../components/myLayout'
export default (props) => (
    <Layout>
        <h1>
            <h1>{props.url.query.title}</h1>
            <p>This is the blog post content.</p>
        </h1>
    </Layout>
)