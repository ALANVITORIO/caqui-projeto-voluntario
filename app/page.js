import 'bootstrap/dist/css/bootstrap.css';

import SecaoHero from './components/SecaoHero';
import Sobre from './components/Sobre';
import EventosPassados from './components/EventosPassado';
import EsseAno from './components/EsseAno';
import Historia from './components/Historia';
import Finalizar from './components/Finalizar';
import Divider from './components/Divider';
import Footer from './Footer';

export default function Home() {
  return (
    <main>
      <div>
        <SecaoHero />

        <Sobre />
        <Divider />
        <EventosPassados />
        <Divider />
        <EsseAno />

        <Divider />

        <Historia />
        <Divider />
        <Finalizar />
        <Divider />
        <Footer />
      </div>
    </main>
  );
}
