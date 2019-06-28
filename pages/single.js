import Layout from '../components/Layout'

import '../static/app.css';

class Single extends React.Component {
    render() {

        return (
            <Layout>
                 <div className="App">
          <div>
                <img src="../static/images/left.svg" className="logo" alt="logo" />
          </div>

          <div className="single-fruit-image">
                <img src="../static/images/banana.jpg" alt="My image" className="image" />
          </div>

          <div className="single-fruit-display">
                <div>
                    <h2> Banana </h2> 
                </div>

                <div>
                    <h3> May - June </h3> 
                </div>
          </div>
          <div style={{clear: 'both'}}></div>
          <div className="single-fruit-category">
                <div>
                    <h1>Nutritional Value</h1>
                </div>
                <div>
                  <img src="../static/images/up.svg" className="up" alt="logo" />   
                </div>
          </div>
          
                <div className="single-fruit-category">
                <div>
                    <h1>Health Benefit</h1>
                </div>
                <div>
                      <img src="../static/images/down.svg" className="down" alt="logo" />
                </div>
           </div>

          <div>
                <p>1. Bananas May Aid Weight Loss</p>
                <p>2. Bananas May Support Heart Health</p>
                <p>3. Bananas Contain Powerful Antioxidants</p>
                <p>4. Manganese in Bananas is good for your skin</p>
          </div>
  
  </div>
            </Layout>
        )
    }
}

export default Single

