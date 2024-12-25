import QRCodeScanner from '@/components/common/qr-code-scanner';
import React from 'react';

const ScannerModePage: React.FC = () => {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-4 overflow-y-auto overflow-x-hidden">
      <QRCodeScanner />
    </div>
  );
};

export default ScannerModePage;
