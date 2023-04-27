import { FC } from 'react';
import { Header } from './common/components/header/header.component';
import { MenuList } from './modules/menu/components/menu-list/menu-list.component';
import { Footer } from './common/components/footer/footer.component';

import pizzaMenu from './mocks/pizza.json';

export const App: FC = () => {
  return (
    <div>
      <Header />
      <div className="mx-12 mb-24">
        <MenuList items={pizzaMenu} />
      </div>
      <Footer />
    </div>
  );
};
