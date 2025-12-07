import React from 'react';
import { Video, Phone } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-6 bg-white/30">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-heading-grey inline-block relative pb-2">
            Services
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary-sage rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-sage/10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary-sage/10 text-primary-sage rounded-full flex items-center justify-center mb-6">
              <Video size={32} />
            </div>
            <h3 className="text-2xl font-bold text-heading-grey mb-4">Virtual Consultations</h3>
            <p className="text-body-grey leading-relaxed">
              Connect via high-quality video call for visual assessments and detailed consultations. Perfect for non-emergency conditions, follow-ups, and discussing test results from the comfort of your home.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-sage/10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary-sage/10 text-primary-sage rounded-full flex items-center justify-center mb-6">
              <Phone size={32} />
            </div>
            <h3 className="text-2xl font-bold text-heading-grey mb-4">Telephonic Consultations</h3>
            <p className="text-body-grey leading-relaxed">
              Quick and efficient advice over the phone. Ideal for prescription renewals, general medical advice, and screening. A convenient way to get professional guidance without a video link.
            </p>
          </div>

        </div>

        {/* Additional Booking Info */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-body-grey leading-relaxed bg-white/50 p-6 rounded-xl border border-primary-sage/10 shadow-sm">
            You can request an appointment via <a href="https://www.medpages.info/sf/index.php?page=person&personcode=418872" target="_blank" rel="noopener noreferrer" className="text-primary-sage font-semibold hover:underline transition-colors">Medpages</a>, <a href="https://wa.me/27615053025" target="_blank" rel="noopener noreferrer" className="text-primary-sage font-semibold hover:underline transition-colors">WhatsApp</a> or book directly with <a href="https://www.recomed.co.za/general-practitioner/centurion/retha-silvis/57561/69233/" target="_blank" rel="noopener noreferrer" className="text-primary-sage font-semibold hover:underline transition-colors">RecoMed</a>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;