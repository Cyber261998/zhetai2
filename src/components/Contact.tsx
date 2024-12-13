import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { ContactInfo } from './common/ContactInfo';
import { ContactForm } from './common/ContactForm';

export default function Contact() {
  const t = useTranslation();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.contact.title}</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">{t.contact.getInTouch}</h3>
            <ContactInfo />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}