import React from 'react';
import arrow from './img/down-arrow.png';
import Navbar from './Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import ModelY from './ModelY';
import ModelS from './ModelS';
import ModelX from './ModelX';
import SolarPanel from './SolarPanel';
import SolarRoof from './SolarRoof';


const Home = () => {
    return ( 
      <div className="main">
          <div className="model-3_body">
              <Router>
                <Navbar/>
              </Router>
                <div className="model-name">Model 3</div>
                <div className="model-description">Order Online for <span>Touchless Delivery</span></div>
                <div className="button-flex">
                    <button className="custom-name">custom order</button>
                    <button className="existing-inventory">existing inventory</button>
                </div>
            <div className="arrow-flex">
                <img src={arrow} alt="" className="down-arrow" />
            </div>
          </div>
         <div> { <ModelY /> }</div>
         <div> { <ModelS /> }</div>
         <div> { <ModelX /> }</div>
         <div> { <SolarPanel /> }</div>
         <div> { <SolarRoof /> }</div>
      </div>
     );
}
 
export default Home;