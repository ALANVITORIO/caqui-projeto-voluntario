import 'bootstrap/dist/css/bootstrap.min.css';


import SecaoHero from './components/SecaoHero';
import Sobre from './components/Sobre';
import EventosPassados from './components/EventosPassado';
import EsseAno from './components/EsseAno';



export default function Home() {
  return (
    <main>
      <div>
      <SecaoHero/>
        <Sobre />
        <EventosPassados/>
        <EsseAno/>
      </div>
    </main>
  );
}
