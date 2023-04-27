import { FC } from 'react';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="h-12 shadow-xl px-6 mb-12">
      <div className="flex items-center h-full">
        <a href="/" className="text-xl font-semibold">
          PizzaStack
        </a>
      </div>
    </div>
  );
};
