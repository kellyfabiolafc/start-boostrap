//import style from './styles-sheet/style.module.css';

import { Navbar } from './components/Navbar';

export const App = () => {
  const links = [
    {
      title: 'home',
      href: '/home',
    },
    {
      title: 'About',
      href: '/about',
    },
  ];

  const links2 = [
    {
      title: 'contact',
      href: '/contact',
    },
    {
      title: 'products',
      href: '/products',
    },
  ];

  return (
    <div>
      <Navbar
        links={links}
        manzana='1'
        manzana2='2'>
        {/* =========esto esta dentro========== */}
        <p>hola</p>
        <p>hola</p>
      </Navbar>
      <Navbar
        links={links2}
        manzana={2}
        manzana2={['1', '2', '3']}
        status={false}>
        {/* =========esto esta dentro========== */}
        <p>hola</p>
        <p>hola</p>
        <p>hola</p>
        <p>hola</p>
        <p>hola</p>
        <p>hola</p>
        <p>hola</p>
        <p>hola</p>
      </Navbar>
    </div>
  );
};