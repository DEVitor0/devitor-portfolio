import { Content } from '../../data/content';
import Header from '../../components/layout/Header/header';
import AllResultsCard from '../../components/ui/Card/allResultsCard';
import Footer from '../../components/layout/Footer/footer';
import FilterMenu from '../../components/features/FilterMenu/filtermenu';

function Writing() {
  const writing = Content.filter((item) => item.category === 'Projetos');

  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {writing.length} results (0.43 seconds)
        </p>
        <AllResultsCard results={writing} />
      </div>
      <Footer />
    </div>
  );
}

export default Writing;
