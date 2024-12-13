import React from 'react';
import { RefreshCw } from 'lucide-react';
import { currencyRates } from '../constants/exchangeRates';

export default function ExchangeRates() {
  return (
    <section id="rates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Live Exchange Rates</h2>
          <div className="flex items-center text-sm text-gray-600">
            <RefreshCw className="w-4 h-4 mr-2" />
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currencyRates.map((rate, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold">{rate.currency}/HKD</span>
                <span className={`text-sm ${
                  rate.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {rate.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-blue-600">{rate.rate}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}