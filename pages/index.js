import Layout from '../components/Layout'
import Single from './single'

class Index extends React.Component {
    render() {
        return (
            <Layout>
                <div>
                    <h1>Homepage</h1>
                    <Single></Single>
                </div>
            </Layout>
        )
    }
}

export default Index
