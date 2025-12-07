import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const appointmentUrl = "https://www.recomed.co.za/general-practitioner/centurion/retha-silvis/57561/69233/";
  const registerUrl = "https://forms.gle/s6rf8ifnAjGdYLbY7";

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 bg-gradient-to-b from-light-sage/50 to-transparent">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading-grey leading-tight">
          Need to see a <span className="text-primary-sage">GP?</span>
        </h1>
        
        <p className="text-lg md:text-xl text-body-grey leading-relaxed max-w-2xl mx-auto">
          Medical Care from the comfort of your home. We offer virtual and telephonic consultations to ensure your health is prioritised without the wait.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 w-full sm:w-auto">
          <a href={appointmentUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto text-lg px-8 py-3">Book Appointment</Button>
          </a>
          <a href={registerUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-3">Register</Button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;