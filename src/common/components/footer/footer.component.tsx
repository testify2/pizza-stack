import { FC } from 'react';
import { FooterLink } from '../footer-link/footer-link.component';

export const Footer: FC = () => {
  return (
    <h1 className="bg-gray-900 p-12">
      <div>
        <div className="mb-4">
          <span className="uppercase font-bold text-zinc-500">Контакты</span>
        </div>
        <div className="mb-8">
          <ul>
            <FooterLink href="tel:+3804412345567" children="044 123 45 67" />
            <FooterLink href="mailto:info@pizzastack.app" children="info@pizzastack.app" />
          </ul>
        </div>
        <hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8" />
        <div>
          <span className="text-xl font-semibold text-white">🍕 PizzaStack</span>
        </div>
      </div>
    </h1>
  );
};
