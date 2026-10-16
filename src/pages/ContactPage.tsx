import React from 'react';
import { Contact } from '../components/sections/Contact';
import { FAQ } from '../components/sections/FAQ';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      {/* 1. Main Project Enquiry & Direct Contact Section */}
      <Contact />

      {/* 2. Questions & Reassurance */}
      <FAQ />
    </div>
  );
};
