import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import AboutPage from '../../../views/About/AboutPage';
import CareersPage from '../../../views/Careers/CareersPage';
import ContactPage from '../../../views/Contact/ContactPage';
import HomePage from '../../../views/Home/HomePage';
import ServicesPage from '../../../views/Services/ServicesPage';

export function NavBar() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path={'/'}>
            <HomePage />
          </Route>
          <Route path={'/about'}>
            <AboutPage />
          </Route>
          <Route path={'/services'}>
            <ServicesPage />
          </Route>
          <Route path={'/careers'}>
            <CareersPage />
          </Route>
          <Route path={'/contact'}>
            <ContactPage />
          </Route>
        </Switch>
      </header>
    </Router>
  );
}
