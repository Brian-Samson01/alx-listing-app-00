// components/layout/Footer.tsx

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        
        <div>
          <h2 className="text-lg font-semibold">StayFinder</h2>
          <p className="text-sm text-gray-300 mt-2">
            Find amazing stays around the world at the best prices.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

      </div>
      <p className="text-center text-xs text-gray-400 mt-6">© 2025 StayFinder</p>
    </footer>
  );
};

export default Footer;
