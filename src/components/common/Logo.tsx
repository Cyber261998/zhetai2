import React from 'react';
import { Building2 } from 'lucide-react';

interface LogoProps {
  className?: string;
  textColorClass?: string;
}

export function Logo({ className = '', textColorClass = 'text-blue-600' }: LogoProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Building2 className={`h-8 w-8 ${textColorClass}`} />
      <div>
        <div className={`font-bold text-xl ${textColorClass}`}>哲泰國際匯款</div>
        <div className="text-sm text-gray-600">Zhe Tai International Remittance</div>
      </div>
    </div>
  );
}