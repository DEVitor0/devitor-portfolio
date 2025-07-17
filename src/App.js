import './styles.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './pages/About/about';
import Home from './pages/Home/home';
import Social from './pages/Social/social';
import AllResults from './pages/AllResults/allResults';
import NotFound from './pages/NotFounded/notFound';
import ProjectsPage from './pages/Projects/projectsPage';
import ImagesPage from './pages/ImagesPage/imagesPage';
import BlogPage from './pages/Blog/blogPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/geral" component={AllResults} />
          <Route path="/sobre" component={About} />
          <Route path="/projetos" component={ProjectsPage} />
          <Route path="/contato" component={Social} />
          <Route path="/imagens" component={ImagesPage} />
          <Route path="/artigos" component={BlogPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
