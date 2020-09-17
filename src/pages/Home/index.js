import React, {Component} from 'react'
import{Link} from 'react-router-dom';

import './style.css';

export default class Register extends Component{

   
  

    render(){
        return(
            <div>

                
     <header className="heade">    
    <div className="container">
        <nav className="nav">
            <ul className="nav-list nav-list-mobile ">
                <li className="nav-item">
                    <div className="mobile-menu">
                        <span className="line line-top"></span>
                        <span className="line line-bottom"></span>

                    </div>
                </li>
                <li className="nav-item">
                    <a href="index.html" class="nav-link nav-link-apple"></a>
                </li>
                <li className="nav-item">
                    <a href="#" class="nav-link nav-link-bag"></a>
                </li>
            </ul>
            
            <ul className="nav-list nav-list-larger">
                <li className="nav-item nav-item-hidden">
                    <a href="index.html" class="nav-link nav-link-apple"></a>
                </li>
                <li className="nav-item">
                    <a href="#" class="nav-link">Mac</a>
                </li>
                <li className="nav-item">
                    <a href="#" class="nav-link">iPad</a>
                </li>
                <li className="nav-item">
                    <a href="#" class="nav-link">iPhone</a>
                </li>
                <li className="nav-item">
                    <a href="#" class="nav-link">Watch</a>
                </li>
                <li className="nav-item">
                    <a href="#" class="nav-link">TV</a>
                </li>
                <li className="nav-item">
                    
                    <Link to="/register" className="nav-link">Registrar-se</Link>
                </li>
                <li className="nav-item">
                    
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <a href="#" class="nav-link nav-link-search"></a>
                </li>
                <li className="nav-item">
                    <a href="#" class="nav-link nav-link-bag"></a>
                </li>
            </ul>
            
        </nav>
    </div>
</header>


<div className="span">
    <p>
        <a href="#">Evaluate COVID‑19 symptoms and understand next steps ></a> 
    </p>
</div>


<div className="covid-span">
    <p>
       <a href="#">Shop online</a> and get free, no‑contact delivery, 
       Specialist help, and more.
    </p>
</div>

<section className="hero iphone-se">
    <div className="container">
        <div class="title">
            <h2 className="title-heading">iPhone SE</h2>
            <h3 className="title-sub-heading">Lots to love. Less to spend. <br/>
                                            Starting at $399.</h3>
            <p className="title-price">From $9.54/mo. or $229 with trade-in.*</p>
        </div>
        <div className="cta">
            <a href="#" className="cta-link">Learn more ></a>
            <a href="#" className="cta-link">Buy ></a>
        </div>
    </div>
</section>

<section className="hero iphone-11">
    <div className="container">
        <div className="title title-dark">
            <h2 className="title-heading">iPhone 11</h2>
            <h3 className="title-sub-heading">Just the right amount of everything.</h3>
            <p className="title-price">From $19.95/mo. or $479 with trade-in.*</p>
        </div>
        <div className="cta">
            <a href="#" className="cta-link cta-link-darker">Learn more</a>
            <a href="#" className="cta-link cta-link-darker">Buy</a>
        </div>
    </div>
</section>

            </div>
        );
    }
}