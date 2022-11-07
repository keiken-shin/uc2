import { NavLink } from 'react-router-dom';

export function Navbar() {
  const navigation = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'So funktioniert´s',
      path: '/how-it-works',
    },
    {
      label: 'Unser Services',
      path: '/our-services',
    },
  ];

  return (
    <header className="h-20 flex items-center border-b border-neutral-400 justify-between">
      <NavLink to="/">
        <div className="font-serif font-bold text-xl">Legal AI</div>
      </NavLink>

      <nav className="">
        <ul className="flex items-center gap-x-10 text-sm transition-all ease-in-out font-medium">
          {navigation.map((nav, idx) => (
            <li key={idx}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  isActive ? 'text-neutral-800' : 'text-neutral-500'
                }
              >
                {nav.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
