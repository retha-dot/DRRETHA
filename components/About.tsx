import React from 'react';
import { Award, MapPin, Monitor } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-heading-grey inline-block relative pb-2">
            About Dr. Retha Silvis
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary-sage rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Text & Image */}
          <div className="space-y-6 text-center lg:text-left">
            <img 
              src="https://drrethasilvis.co.za/portfolio.jpg" 
              alt="Dr. Retha Silvis" 
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg border-2 border-white mx-auto lg:mx-0"
            />
            <p className="text-lg leading-relaxed">
              Dr. Retha Silvis is a General Practitioner offering virtual and telephonic consultations, making quality healthcare accessible wherever you are.
            </p>
            <p className="text-lg leading-relaxed">
              She offers a wide range of primary healthcare services to individuals and families of all ages.
            </p>
            <p className="text-lg leading-relaxed">
              Enquiries are welcome via WhatsApp message seven days a week. Sick notes are sent via email; to you, or your employer.
            </p>
            <p className="text-lg leading-relaxed">
              This service is designed to make healthcare simple, flexible, and personal—helping you take care of your health from the comfort of your home.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            <div className="bg-white/50 backdrop-blur border border-primary-sage/10 p-6 rounded-xl flex items-center space-x-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary-sage/10 text-primary-sage rounded-full">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-bold text-heading-grey">Registered GP</h3>
                <p className="text-sm">MBCHB (SMU) 2016</p>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur border border-primary-sage/10 p-6 rounded-xl flex items-center space-x-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary-sage/10 text-primary-sage rounded-full">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-heading-grey">Location</h3>
                <p className="text-sm">Eldoraigne, Centurion</p>
                <p className="text-xs text-primary-sage italic mt-0.5">...or wherever YOU are!</p>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur border border-primary-sage/10 p-6 rounded-xl flex items-center space-x-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary-sage/10 text-primary-sage rounded-full">
                <Monitor size={24} />
              </div>
              <div>
                <h3 className="font-bold text-heading-grey">Virtual Care</h3>
                <p className="text-sm">Online & Telephonic</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;