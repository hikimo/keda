import { Link } from "react-router-dom";
import Logo from "../../logo.svg";
import ChartIllustration from "../../assets/images/charts.svg";
import "./home.scss";

export default function HomePage() {
  return (
    <div className="wrapper">
      <nav>
        <div className="nav nav--desktop">
          <div className="nav__icon">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          
          <div className="nav__menu">
            <div className="nav__menu-item">
              <a href="/">About</a>
            </div>
            <div className="nav__menu-item">
              <a href="/">Pricing</a>
            </div>
            <div className="nav__menu-item">
              <a href="/">Contact</a>
            </div>
          </div>

          <div className="nav__menu nav__menu-end">
            <div className="nav__menu-item cta">
              <Link to="login">
                Login
              </Link>
            </div>
          </div>
        </div>

        <div className="nav nav--mobile">
          <div className="nav__icon">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          
          <div className="nav__menu nav__menu-end">
            <button className="nav__menu-toggle">Menu</button>
          </div>
        </div>
      </nav>

      <header className="header container">
        <div className="header__illustration">
          <img src={ChartIllustration} alt="Illustration" />
        </div>
        
        <div className="header__content">
          <h1>
            #1 The World's Best Choosed ERP<br/>
            99.9% Efficient And Make Work Easier
          </h1>
          <p>
            Wells ERP System is integrated and ease take all the controls.<br />
            Helped more than 999+ company all over the world!
          </p>
        </div>
      </header>

      <section className="about">
        <div className="container">
          <div className="about__content">
            <div className="about__content-img">
              <img src="https://plus.unsplash.com/premium_photo-1670430227121-a37b0efb7457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="company"/>
            </div>

            <div className="about__content-text">
              <h2 className="about__title">About Us</h2>
              <p>
                We're a startup company, mainly focus with SAAS product and IT Consultan.<br/>
                Our main bussiness are helping out many company to growth and make their system be better.<br/>
                Founded in 2024 from a non-profit project, and growth as a startup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2 className="pricing__title">Choose Your Tier</h2>

          <div className="tier">
            <div className="tier-item tier-item--1">
              <h4>TIER 1 / BASIC</h4>
              <p className="tier-item__price">
                $ 5.00 <small>/ user</small>
              </p>
              
              <p>Features</p>
              <ol>
                <li>Record stock in</li>
                <li>Record stock out</li>
                <li>Calculate Revenue</li>
              </ol>
            </div>

            <div className="tier-item tier-item--2">
              <h4>TIER 2 / BUSINESS</h4>
              <p className="tier-item__price">
                $ 10.00 <small>/ user</small>
              </p>
              
              <p>Features</p>
              <ol>
                <li>Record stock in & out</li>
                <li>Record Revenue</li>
                <li>Sales Revenue Analitic using Chart</li>
                <li>Support 7x24 hour</li>
              </ol>
            </div>

            <div className="tier-item tier-item--3">
              <h4>TIER 3 / ENTERPRENEUR</h4>
              <p className="tier-item__price">
                $ 20.00 <small>/ user</small>
              </p>
              
              <p>Features</p>
              <ol>
                <li>Record stock in & out</li>
                <li>Record Revenue</li>
                <li>Sales Revenue Analitic using Chart</li>
                <li>Support 7x24 hour</li>
                <li>Export Data to Excel</li>
                <li>AI Prediction Revenue</li>
              </ol>
            </div>
          </div>
        </div>

      </section>

      <footer className="footer">
        <div className="container">
          <p>Copyright &copy; 2022 Wells ERP</p>
        </div>
      </footer>

    </div>
  );
}

