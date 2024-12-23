import QRCodeScanner from '@/components/common/qr-code-scanner';
import React from 'react';

const QRCodePage: React.FC = () => {
    return (
        <div className='grid h-full grid-cols-2 gap-4 overflow-y-auto overflow-x-hidden'>
            <QRCodeScanner/>
        </div>
    );
};

export default QRCodePage;