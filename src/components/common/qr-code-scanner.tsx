import React from 'react';
import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner';

const QRCodeScanner: React.FC = () => {
  const [result, setResult] = React.useState<IDetectedBarcode[]>([]);

  const handleOnClick = (detect: IDetectedBarcode[]) => {
    setResult((prevResult) => [...prevResult, detect[0]]);
  };
  return (
    <div className="size-72">
      <Scanner
        paused={true}
        allowMultiple={false}
        scanDelay={1000}
        onScan={(result) => handleOnClick(result)}
      />
      <div>
        {result.map((item, index) => (
          <div key={index}>{item.rawValue}</div>
        ))}
        heljkh
      </div>
    </div>
  );
};

export default QRCodeScanner;
