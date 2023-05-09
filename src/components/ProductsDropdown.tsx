import React from 'react';
import Link from 'next/link';

interface DropdownProps {
  isOpen: boolean;
}

interface DropdownItem {
  href: string;
  label: string;
}

const dropdownItems: DropdownItem[] = [
  {
    href: '/products/Art-and-decoration',
    label: 'Art and decoration',
  },
  {
    href: '/products/Deep-pour-resin',
    label: 'Deep pour resin',
  },
  {
    href: '/products/Floor-resin',
    label: 'Floor resin',
  },
  {
    href: '/products/Industrial-resin',
    label: 'Industrial resin',
  },
];

const Dropdown: React.FC<DropdownProps> = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } absolute z-30 right-4 w-48 py-2 mt-14 bg-white border sm:rounded-lg sm:shadow-lg`}
      style={{ transform: 'translateX(25%)' }}
    >
      {dropdownItems.map((item) => (
        <Link key={item.href} legacyBehavior href={item.href}>
          <a className="text-gray-600 hover:text-gray-400 py-2 px-4 block whitespace-no-wrap">
            {item.label}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
