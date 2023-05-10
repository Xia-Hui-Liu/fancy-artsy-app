import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col w-64 h-full bg-white mt-5">
      {/* Categories */}
      <h2 className="text-lg font-bold text-center">Categories</h2>
      <hr className="w-full mb-1"></hr>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search"
        className="p-1 ml-1 mt-2 rounded-md border-gray-300 border"
      />
      {/* Latest news */}
      <div className="flex flex-col mt-4">
        <h2 className="text-lg font-bold  text-center">Latest news</h2>
        <hr className="w-full mb-1"></hr>
        <ul className="text-sm text-center">
          <li className="mb-1">
            <Link href="/news" legacyBehavior>
              <a className="text-gray-600 hover:text-black">Article 1</a>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="/news" legacyBehavior>
              <a className="text-gray-600 hover:text-black">Article 2</a>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="/news" legacyBehavior>
              <a className="text-gray-600 hover:text-black">Article 3</a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact info */}
      <div className="flex flex-col mt-4">
        <h2 className="text-lg font-bold mb-2 text-center">Contact Us</h2>
        <hr className="w-full mb-2"></hr>
        <ul className="text-sm">
          <li className="mb-1 ml-3">Email:<a href="mailto:fancyartsy82@gmail.com" className="email-link">  &nbsp;&nbsp;fancyartsy82@gmail.com</a></li>
          <li className="mb-1 ml-3 ml-16"><a href="mailto:lxy198281@163.com" className="email-link">lxy198281@163.com</a></li>
          <li className="mb-1 ml-3">Phone: &nbsp; +86 134 0169 3760 (China)</li>
          <li className="mb-1 ml-3 ml-12">&nbsp; +63 096 1271 8816 (Philippines)</li>
          <li className="mb-1 ml-3">Viber: &nbsp;+63 096 1271 8816</li>
          <li className="mb-1 ml-3">WhatsApp:&nbsp;+63 096 1271 8816</li><br></br>
          <li className="mb-5 ml-3">Address: &nbsp;199#, Qianyu Public Road,
                        Chenjia Town,
                        Chongming District,
                        Shanghai 202150,
                        China</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
