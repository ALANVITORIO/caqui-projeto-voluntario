import 'bootstrap/dist/css/bootstrap.css';

import SecaoHero from './components/SecaoHero';
import Sobre from './components/Sobre';
import EventosPassados from './components/EventosPassado';
import EsseAno from './components/EsseAno';
import Historia from './components/Historia';
import Finalizar from './components/Sobre';

export default function Home() {
  return (
    <main>
      <div>
        <SecaoHero />
        <Sobre />
        <EventosPassados />
        <EsseAno />
        <Historia />
        <Finalizar />
      </div>
    </main>
  );
}
