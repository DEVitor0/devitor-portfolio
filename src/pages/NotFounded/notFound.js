import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header/header';
import Footer from '../../components/layout/Footer/footer';
import FilterMenu from '../../components/features/FilterMenu/filtermenu';
import './notFound.css';

function NotFound() {
  // Get url pathname to use as search value
  const urlPathname = window.location.pathname;
  const rx = /[^/](.*)/g;
  const arr = rx.exec(urlPathname);
  let val = ' ';
  if (arr) {
    val = arr[0];
  }

  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container notfound-page">
        <div className="suggest">
          <p>Você quis dizer:</p>
          <div className="suggestions">
            <Link to="/geral"> geral </Link>
            <Link to="/sobre"> sobre </Link>
            <Link to="/projetos"> projetos </Link>
            <Link to="/artigos"> artigos </Link>
            <Link to="/imagens"> imagens </Link>
            <Link to="/contato"> contato </Link>
          </div>
        </div>
        <div className="notfound-details">
          <p>Não encontramos resultados que correspondam à sua busca</p>
          <p>
            Sua busca por <b>{val}</b> não retornou resultados.
          </p>
          <p> Sugestões: </p>
          <ul>
            <li>Tente usar outra palavra-chave no menu de busca.</li>
            <li>Verifique se todas as palavras estão escritas corretamente.</li>
            <li>Clique em um dos links sugeridos ou no menu acima.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default NotFound;
