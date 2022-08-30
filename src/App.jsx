import { Footer, Header } from "@components";
import { ProdutosSelecionadosProvider } from "./context/ProdutosSelecionados/index";
import styles from "./App.module.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "@router";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <ProdutosSelecionadosProvider>
          <Header />
          <main className={styles.main}>
            <Router />
          </main>
          <Footer />
        </ProdutosSelecionadosProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
