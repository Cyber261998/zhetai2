import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactItemProps {
  icon: React.ElementType;
  title: string;
  content: string | React.ReactNode;
}

function ContactItem({ icon: Icon, title, content }: ContactItemProps) {
  return (
    <div className="flex items-start space-x-4">
      <Icon className="w-6 h-6 text-blue-600 mt-1" />
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <ContactItem
        icon={MapPin}
        title="Address"
        content={<>Central Plaza, 18 Harbour Road<br />Wan Chai, Hong Kong</>}
      />
      <ContactItem
        icon={Phone}
        title="Phone"
        content="+852 2xxx xxxx"
      />
      <ContactItem
        icon={Mail}
        title="Email"
        content="info@zhetai.com.hk"
      />
    </div>
  );
}