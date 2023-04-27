import { FC } from 'react';
import { Pizza } from '../../types/pizza';
import { MenuItem } from '../menu-item/menu-item.component';

interface MenuListProps {
  items: Pizza[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {items.map(({ image, ...pizza }) => (
        <MenuItem {...pizza} imagePath={`/assets/pizza/${image}`} key={`pizza-${pizza.id}`} />
      ))}
    </div>
  );
};
