import { FC } from 'react';

interface FooterLinkProps {
  href: string;
  children: string;
}

export const FooterLink: FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <a href={href} className="font-bold text-sm text-gray-400 hover:text-gray-300">
        {children}
      </a>
    </li>
  );
};
