/* eslint-disable jsx-a11y/anchor-has-content */
import { ProjectsContent } from '../../data/projectsContent';
import './projectsPage.css';
import Header from '../../components/layout/Header/header';
import Footer from '../../components/layout/Footer/footer';
import FilterMenu from '../../components/features/FilterMenu/filtermenu';

const ProjectsPage = ({ results }) => {
  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {ProjectsContent.length} results (0.84 seconds)
        </p>
        <div className="projects-content">
          {ProjectsContent.map((item) => (
            <div className="projects-card" key={item.name}>
              <a href={item.link} className="project-link">
                <p>{item.link}</p>
                <h3>{item.name}</h3>
              </a>
              <div className="projects-details">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects-img-container"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></a>

                <div className="projects-text-container">
                  <p className="projects-excerpt">{item.excerpt}</p>
                  <p className="projects-tools">{item.tools}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
