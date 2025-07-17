import { Content } from '../../data/content';
import Header from '../../components/layout/Header/header';
import AllResultsCard from '../../components/ui/Card/allResultsCard';
import Footer from '../../components/layout/Footer/footer';
import FilterMenu from '../../components/features/FilterMenu/filtermenu';

function Social() {
  const contact = Content.filter((item) => item.category === 'Contato');

  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {contact.length} results (0.57 seconds)
        </p>
        <AllResultsCard results={contact} />
      </div>
      <Footer />
    </div>
  );
}

export default Social;
