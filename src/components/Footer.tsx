import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-8 border-t border-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Loverboy®</h3>
            <p>Premium Hoodies Since 2023</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/products" className="hover:underline">Products</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Loverboy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;