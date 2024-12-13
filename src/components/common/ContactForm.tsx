import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export function ContactForm() {
  const t = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.name}</label>
        <input 
          type="text" 
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.email}</label>
        <input 
          type="email" 
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.message}</label>
        <textarea 
          rows={4} 
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        ></textarea>
      </div>
      <button 
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        {t.contact.form.send}
      </button>
    </form>
  );
}