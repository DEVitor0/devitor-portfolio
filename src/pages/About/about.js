import { Content } from '../../data/content';
import AllResultsCard from '../../components/ui/Card/allResultsCard';
import Header from '../../components/layout/Header/header';
import Footer from '../../components/layout/Footer/footer';
import FilterMenu from '../../components/features/FilterMenu/filtermenu';
import useRenderTime from '../../components/features/GetTimeToRender/GetTimeToRender';

function About() {
  const renderTime = useRenderTime();

  const about = Content.filter((item) => item.category === 'Sobre');
  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          {about.length} resultados em ({renderTime ? `${renderTime}s` : '...'})
        </p>
        <AllResultsCard results={about} />
      </div>
      <Footer />
    </div>
  );
}
export default About;
