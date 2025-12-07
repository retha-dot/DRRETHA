import React from 'react';

const Payment: React.FC = () => {
  return (
    <section id="payment" className="py-16 px-6">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-heading-grey mb-6">Payment</h2>
        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary-sage">
            <p className="text-lg text-body-grey font-medium">
                Cash payments can be made via EFT or securely via PayFast and most non-network medical aids are accepted.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Payment;