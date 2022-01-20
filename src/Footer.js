import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return ( 
        <footer>
            <div className="footer-flex">
                <div className="inner-footer">
                    <div>
                        <Link to="#!">Tesla &copy; 2022</Link>
                        <Link to="#!">privacy . legal</Link>
                        <Link to="#!">contact</Link>
                        <Link to="#!">careers</Link>
                    </div>
                    <div>
                        <Link to="#!">news</Link>
                        <Link to="#!">engage</Link>
                        <Link to="#!">locations</Link>
                    </div>
                </div>

            </div>
        </footer>
     );
}
 
export default Footer;