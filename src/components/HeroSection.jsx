import { NavLink } from 'react-router-dom';
import HeroBg from '../assets/hero.svg';

export function HeroSection() {
  return (
    <div className="grid grid-cols-1 bg-gray-200 rounded-3xl relative h-[calc(100vh_-_8rem_-_1rem)] p-8 overflow-hidden lg:grid-cols-2">
      <section className="col-span-1 z-10">
        <div className="w-full m-auto flex flex-col justify-center items-start h-full lg:w-3/4">
          <h1 className="text-4xl font-bold text-neutral-800 lg:text-6xl">
            Probleme mit Deiner Reise?
          </h1>

          <div className="mt-4 text-base font-medium text-neutral-600 leading-7">
            <p>
              Wurde Deine Urlaubsruhe durch Reisemängel gestört? Willst Du Dir
              hohe Stornogebühren nicht gefallen lassen? Gab es Probleme mit
              Deinem Flug oder Gepäck?
            </p>
            <p className="mt-2">
              Wir holen Dein Geld zurück - easy und ohne Risiko!{' '}
            </p>
          </div>

          <NavLink to="/intake">
            <div className="mt-4 action-button">Fordere Deine Rechte ein!</div>
          </NavLink>
        </div>
      </section>

      <section className="flex w-72 absolute -top-16 -right-24 opacity-40 lg:static lg:col-span-1 lg:w-full lg:opacity-100">
        <div className="w-full object-fill lg:m-auto lg:w-3/4">
          <img src={HeroBg} alt="hero" className="" />
        </div>
      </section>
    </div>
  );
}
