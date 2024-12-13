import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Globe2, Shield, Clock, Banknote } from 'lucide-react';

const featureIcons = {
  globalCoverage: Globe2,
  security: Shield,
  speed: Clock,
  rates: Banknote,
};

export default function Features() {
  const t = useTranslation();
  const features = [
    { key: 'globalCoverage', icon: featureIcons.globalCoverage },
    { key: 'security', icon: featureIcons.security },
    { key: 'speed', icon: featureIcons.speed },
    { key: 'rates', icon: featureIcons.rates },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.features.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ key, icon: Icon }) => (
            <div key={key} className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <Icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t.features[key].title}</h3>
              <p className="text-gray-600">{t.features[key].description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}