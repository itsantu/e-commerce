import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-semibold text-gray-700 mb-4">Useful Links</h5>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Legal & Privacy</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Gift Card</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Customer Service</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">My Account</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-700 mb-4">Shop</h5>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Televisions</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Washing Machines</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Air Conditioners</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Laptops</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-700 mb-4">My Account</h5>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">My Profile</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">My Order History</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">My Wish List</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Order Tracking</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Shopping Cart</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-700 mb-4">Company</h5>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Our Blog</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Affiliate</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-gray-500">Copyright © 2022 TailGrids. All Rights Reserved.</p>
          </div>
          <div className="text-center mt-4 md:mt-0">
            <p className="text-gray-500">Need Help? Call Us Now</p>
            <p className="text-gray-500">+99 0214 2542 223</p>
            <p className="text-gray-500">Monday - Friday: 9:00-20:00</p>
            <p className="text-gray-500">Saturday: 11:00 - 15:00</p>
          </div>
          <div className="text-center mt-4 md:mt-0">
            <div className="flex justify-center space-x-4">
              <a href="#"><img src="link-to-paypal-logo.png" alt="PayPal" className="h-6"/></a>
              <a href="#"><img src="link-to-visa-logo.png" alt="Visa" className="h-6"/></a>
              <a href="#"><img src="link-to-mastercard-logo.png" alt="MasterCard" className="h-6"/></a>
              <a href="#"><img src="link-to-amex-logo.png" alt="American Express" className="h-6"/></a>
              <a href="#"><img src="link-to-discover-logo.png" alt="Discover" className="h-6"/></a>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#"><img src="link-to-facebook-icon.png" alt="Facebook" className="h-6"/></a>
              <a href="#"><img src="link-to-twitter-icon.png" alt="Twitter" className="h-6"/></a>
              <a href="#"><img src="link-to-instagram-icon.png" alt="Instagram" className="h-6"/></a>
              <a href="#"><img src="link-to-linkedin-icon.png" alt="LinkedIn" className="h-6"/></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
