

import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { Welcome } from './components/Welcome';
import { WorkWithMe } from './components/WorkWithMe';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Nav />
      <Welcome />
      <Skills />
      <Portfolio />
      <WorkWithMe />
      <Footer />
      <GlobalStyle />
    </>

  );
}
