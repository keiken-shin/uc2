import { NavLink } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  const footerNav = [
    {
      label: 'FAQ',
      path: '/faq',
    },
    {
      label: 'Kontakt',
      path: '/contact',
    },
    {
      label: 'Team',
      path: '/team',
    },
  ];

  return (
    <div className="bg-neutral-800 text-primary rounded-t-3xl p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <section>
          <Logo />
        </section>

        <section>
          <ul className="flex flex-col gap-4 lg:flex-row lg:gap-6">
            {footerNav.map((nav, idx) => (
              <li key={idx}>
                <NavLink to={nav.path}>{nav.label}</NavLink>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-4 border-t border-neutral-600 pt-4 mt-4">
        <div>&copy; {new Date().getFullYear()} Legal AI</div>

        <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
          <li>
            <a href="https://www.legalai.io/privacy">Privacy policy</a>
          </li>
          <li>
            <a href="https://www.legalai.io/impressum">Imprint</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
