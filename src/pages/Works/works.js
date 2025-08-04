import { Content } from '../../data/content';
import Header from '../../components/layout/Header/header';
import AllResultsCard from '../../components/ui/Card/allResultsCard';
import Footer from '../../components/layout/Footer/footer';
import FilterMenu from '../../components/features/FilterMenu/filtermenu';
import useRenderTime from '../../components/features/GetTimeToRender/GetTimeToRender';

function Works() {
  const renderTime = useRenderTime();
  const works = Content.filter((item) => item.category === 'works');

  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          {works.length} resultados encontrados em (
          {renderTime ? `${renderTime}s` : '...'})
        </p>
        <AllResultsCard results={works} />
      </div>
      <Footer />
    </div>
  );
}

export default Works;
