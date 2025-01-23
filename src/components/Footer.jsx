import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Rutba</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Rutba is India's Oldest Retailer. Established in 1881, it has been a destination for excellence in Men’s Bespoke Tailoring & Celebration Wear for over 143 years. We are proud that the who’s who of India, including Prime Ministers, Presidents, Chief Justices, Cricketers, Olympic Medalists, Movie Stars have trusted them with their special apparel needs.
      </p>

      <div className="flex justify-center items-center gap-6 my-8">
        <div>
          <p className="text-lg font-semibold">BRINGING EXPERIENCE OF OVER 143 YEARS</p>
        </div>
        <div>
          <p className="text-lg font-semibold">35+ STORES</p>
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0579/7930/6151/files/Made_In_India_mls_logo.png?v=1720007622" alt="Made in India" className="w-12 mx-auto" />
        </div>
        <div>
          <p className="text-lg font-semibold">4,50,000 HAPPY CUSTOMERS</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-2">
            <img src="https://cdn.shopify.com/s/files/1/0579/7930/6151/files/leaf.svg?v=1683608367" alt="Award Icon" />
          </div>
          <h3 className="text-xl font-semibold">Awarded Best Tailor</h3>
          <p className="text-gray-600">By Master Tailors Association in 1979</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-2">
            <img src="https://cdn.shopify.com/s/files/1/0579/7930/6151/files/leaf.svg?v=1683608367" alt="Award Icon" />
          </div>
          <h3 className="text-xl font-semibold">Fashion & Lifestyle Award</h3>
          <p className="text-gray-600">For contribution towards uplifting the Indian garments & Lifestyle industry</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-2">
            <img src="https://cdn.shopify.com/s/files/1/0579/7930/6151/files/leaf.svg?v=1683608367" alt="Award Icon" />
          </div>
          <h3 className="text-xl font-semibold">Best Showroom Award</h3>
          <p className="text-gray-600">By New Delhi Traders Association in 1996</p>
        </div>
      </div>

      <div className="flex justify-center gap-8 border-t pt-8">
        <div className="text-center">
          <img src="https://cdn.shopify.com/s/files/1/0579/7930/6151/files/truck.svg?v=1683740610" alt="Free Shipping" className="w-8 mx-auto mb-2" />
          <p className="font-semibold">Free Shipping</p>
          <p className="text-gray-600 text-sm">Prepaid orders, above ₹499</p>
        </div>
        <div className="text-center">
          <img src="https://cdn.shopify.com/s/files/1/0579/7930/6151/files/Cash-On-Delivery.svg?v=1683608367" alt="Cash on Delivery" className="w-8 mx-auto mb-2" />
          <p className="font-semibold">Cash On Delivery</p>
          <p className="text-gray-600 text-sm">Select pincodes, above ₹499</p>
        </div>
        <div className="text-center">
          <img src="https://cdn.shopify.com/s/files/1/0579/7930/6151/files/secured-payment.svg?v=1683608367" alt="Secured Payment" className="w-8 mx-auto mb-2" />
          <p className="font-semibold">Secured Payment</p>
          <p className="text-gray-600 text-sm">EMI, Wallets, Cards and more</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
