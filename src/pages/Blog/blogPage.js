import { BlogContent } from '../../data/blogContent';
import './blogPage.css';
import Header from '../../components/layout/Header/header';
import Footer from '../../components/layout/Footer/footer';
import FilterMenu from '../../components/features/FilterMenu/filtermenu';
import useRenderTime from '../../components/features/GetTimeToRender/GetTimeToRender';

const BlogPage = ({ results }) => {
  const renderTime = useRenderTime();

  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container blogpage-container">
        <p className="result-count">
          {BlogContent.length} resultados encontrados em (
          {renderTime ? `${renderTime}s` : '...'})
        </p>
        <div className="blog-content">
          {BlogContent.map((item) => (
            <a href={item.link} className="blog-card" key={item.name}>
              <div className="blog-text-container">
                <div className="category">
                  <img
                    src={`${item.icon}`}
                    className="blog-icon"
                    alt="blob icon"
                  />
                  <p>{item.category}</p>
                </div>
                <h3>{item.name}</h3>
                <p className="blog-excerpt">{item.excerpt}</p>
                <p className="blog-date">{item.date}</p>
              </div>
              <div className="blog-img-container">
                <img src={item.img} alt={item.name} />
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
