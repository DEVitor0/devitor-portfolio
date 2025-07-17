import Header from '../../components/layout/Header/header';
import Footer from '../../components/layout/Footer/footer';
import FilterMenu from '../../components/features/FilterMenu/filtermenu';
import All from '../../components/all';

function AllResults() {
  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-container">
        <All />
      </div>
      <Footer />
    </div>
  );
}
export default AllResults;
