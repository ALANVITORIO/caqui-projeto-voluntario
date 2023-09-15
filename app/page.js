import 'bootstrap/dist/css/bootstrap.css';

import SecaoHero from './components/SecaoHero';
import Sobre from './components/Sobre';
import EventosPassados from './components/EventosPassado';
import EsseAno from './components/EsseAno';
import Historia from './components/Historia';
import Finalizar from './components/Finalizar';
import Divider from './components/Divider';

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
        <div className="pt-5">
          <Divider />
        </div>
        <Historia />
        <Divider />
        <Finalizar />
        <Divider />
      </div>
    </main>
  );
}
