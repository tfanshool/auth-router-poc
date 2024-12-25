import {
  Alert,
  AlertDescription} from '@/components/common/ui/alert';
import { Button } from '@/components/common/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/common/ui/card';
import { ScrollArea } from '@/components/common/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/common/ui/select';
import { cn } from '@/libs/utils/utils';
import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner';
import { Info, Pause, PlayIcon, QrCode } from 'lucide-react';
import React, { useEffect, useState } from 'react';
interface ScanResult {
  value: string;
  timestamp: Date;
}
const ScannerPlaygroundPage: React.FC = () => {
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [scannedCodes, setScannedCodes] = useState<ScanResult[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const getDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(
          (device) => device.kind === 'videoinput'
        );
        setDevices(videoDevices);
        if (videoDevices.length > 0) {
          setSelectedDevice(videoDevices[0].deviceId || `camera-0`);
        }
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };

    getDevices();
  }, []);

  const handleScan = (result: string | null) => {
    if (result) {
      const newResult: ScanResult = {
        value: result,
        timestamp: new Date()
      };
      setScannedCodes((prev) => [newResult, ...prev]);
    }
  };

  const handleError = (error: unknown) => {
    console.error(error);
  };

  const toggleScanner = () => {
    if (!isScanning) {
      setScannedCodes([]);
    }
    setIsScanning((prev) => !prev);
  };
  return (
    <div className="h-full w-full overflow-y-auto overflow-x-hidden">
      <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-12 xl:grid-rows-12">
        {/* Select Camera */}
        <Card className="order-1 w-full xl:order-1 xl:col-span-4 xl:row-span-3">
          <CardHeader>
            <CardTitle>Select Camera</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Select
              onValueChange={setSelectedDevice}
              value={selectedDevice || undefined}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a camera" />
              </SelectTrigger>
              <SelectContent>
                {devices.map((device, index) => (
                  <SelectItem
                    key={device.deviceId}
                    value={device.deviceId || `camera-${index}`}
                  >
                    {device.label || `Camera ${index + 1}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex flex-row gap-2">
              <Button
                onClick={toggleScanner}
                disabled={isScanning}
                variant="default"
                className="w-full"
              >
                <>
                  <PlayIcon className="mr-2 h-4 w-4" /> Start Scanning
                </>
              </Button>
              <Button
                onClick={toggleScanner}
                variant="destructive"
                disabled={!isScanning}
                size={'icon'}
                className="aspect-square"
              >
                <>
                  <Pause className="h-4 w-4" />
                </>
              </Button>
            </div>
          </CardContent>
        </Card>
        {/* Camera View */}
        <Card className="order-2 w-full xl:order-3 xl:col-span-4 xl:row-span-9">
          <CardHeader>
            <CardTitle>Camera View</CardTitle>
          </CardHeader>
          <CardContent className="flex h-full flex-col gap-2">
            <div className="aspect-square overflow-hidden rounded-lg">
              <div className="flex h-full w-full items-center justify-center bg-secondary text-secondary-foreground">
                {!isScanning && <QrCode />}
                {selectedDevice && isScanning && (
                  <Scanner
                    paused={!isScanning}
                    constraints={{
                      deviceId: selectedDevice,
                      facingMode: 'environment'
                    }}
                    allowMultiple={true}
                    styles={{}}
                    components={{ audio: false, zoom: false }}
                    formats={['qr_code']}
                    scanDelay={1000}
                    onScan={(result: IDetectedBarcode[]) =>
                      handleScan(result[0].rawValue)
                    }
                    onError={(error) => handleError(error)}
                  />
                )}
              </div>
            </div>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription className="font-mono text-xs">
                Place the QR code within the square outline on the screen and
                hold steady until scanned.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        {/* Scan Results */}
        <Card className="order-3 w-full xl:order-2 xl:col-span-8 xl:row-span-12">
          <CardHeader>
            <CardTitle>Scan Results</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[600px] rounded-md">
              {scannedCodes.map((result, index) => (
                <div
                  key={index}
                  className={cn('mb-2 rounded-md bg-secondary p-2')}
                >
                  <div className="flex flex-row items-center gap-2">
                    <p className="text-xs text-muted-foreground">
                      {index + 1}.
                    </p>
                    <p
                      className={cn(
                        'font-Bricolage text-sm font-semibold',
                        scannedCodes[0]?.timestamp === result.timestamp &&
                          'text-primary'
                      )}
                    >
                      {result.value}
                    </p>
                  </div>
                  <p className="w-full text-end font-mono text-xs text-muted-foreground">
                    {result.timestamp.toUTCString()}
                  </p>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScannerPlaygroundPage;
