import React from 'react';
import Footer from './Footer';
import { BrowserRouter as Router} from 'react-router-dom';



const Accessories = () => {
    return ( 
        <div className="Accessories_body">

          <div className="model-name">Accessories</div>
          <div className="order-more">
              <button className="shop-now">Shop now</button>
          </div>
          <Router>
            <Footer/>
          </Router>
    </div>
     );
}
 
export default Accessories;