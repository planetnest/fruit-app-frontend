import Layout from '../components/Layout'
import Tabs from '../components/Tabs'
require('../css/styles.css')
import FruitDropdown from '../components/FruitDropdown'
import FruitCard from '../components/FruitCard'


const styles = {
    padding: 20
}
const cardwrapper = {
    display: 'flex',
    flexFlow: 'row wrap', 
    justifyContent: 'flex-start'
}
class Index extends React.Component {
    render() {
        return (
            <div style={styles}>
                <Layout>
                    <div>
                        <h1>Fruitly</h1>
                    </div>
                </Layout>
                <FruitDropdown />
                <Tabs>
                  <div label="In Season">
                    <div style={cardwrapper}>
                        <FruitCard src="../static/banana.jpg" name='Banana'/>
                        <FruitCard src="../static/pineapple.jfif" name='pineapple'/>
                        <FruitCard src="../static/banana.jpg" name='Banana'/>
                        <FruitCard src="../static/banana.jpg" name='Banana'/>
                    </div>
                  </div>
                  <div label="Coming Soon">
                    <div style={cardwrapper}>
                      <FruitCard src="../static/banana.jpg" name='Banana'/>
                      <FruitCard src="../static/pineapple.jfif" name='pineapple'/>
                    </div>
                  </div>
                </Tabs>
            </div>
        )
    }
}

export default Index
