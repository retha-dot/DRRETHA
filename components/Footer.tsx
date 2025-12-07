import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-off-white text-body-grey py-12 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* Col 1: Brand & Compliance */}
        <div>
          <h3 className="text-xl font-bold text-primary-sage mb-4">Dr. Retha Silvis</h3>
          <p className="text-sm text-body-grey leading-relaxed mb-4">
            Committed to providing accessible and high-quality healthcare services.
          </p>
          <p className="text-sm text-body-grey leading-relaxed">
            As required by POPIA, you may request our PAIA manual from our information officer via <a href="mailto:info@drrethasilvis.co.za" className="hover:text-primary-sage transition-colors">info@drrethasilvis.co.za</a> or 061 505 3025.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-primary-sage font-semibold mb-2">Quick Links</h4>
          <a href="mailto:info@drrethasilvis.co.za" className="hover:text-primary-sage transition-colors w-fit">Enquire</a>
          <a href="https://www.medpages.info/sf/index.php?page=person&personcode=418872" target="_blank" rel="noopener noreferrer" className="hover:text-primary-sage transition-colors w-fit">Book via Medpages</a>
          <a href="https://wa.me/27615053025" target="_blank" rel="noopener noreferrer" className="hover:text-primary-sage transition-colors w-fit">Contact</a>
          <a href="https://drrethasilvis.co.za/terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary-sage transition-colors w-fit">Terms and Conditions</a>
        </div>

        {/* Col 3: Contact Info */}
        <div>
          <h4 className="text-primary-sage font-semibold mb-4">Get in Touch</h4>
          <p className="text-sm mb-2">
            <span className="font-medium text-heading-grey block">WhatsApp:</span> 
            <a href="https://wa.me/27615053025" target="_blank" rel="noopener noreferrer" className="hover:text-primary-sage transition-colors">
              061 505 3025
            </a>
          </p>
          <p className="text-sm">
            <span className="font-medium text-heading-grey block">Email:</span> 
            <a href="mailto:info@drrethasilvis.co.za" className="hover:text-primary-sage transition-colors">
              info@drrethasilvis.co.za
            </a>
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1200px] mx-auto border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} Dr. Retha Silvis. All rights reserved.</p>
        <p className="mt-2 md:mt-0">PR Number: 0955795</p>
      </div>
    </footer>
  );
};

export default Footer;