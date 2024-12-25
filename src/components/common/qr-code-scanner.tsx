import React, { useEffect, useState } from 'react';
import {
  IDetectedBarcode,
  Scanner,
  useDevices
} from '@yudiel/react-qr-scanner';
import { Button } from './ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/common/ui/popover';
import { Check, ChevronsUpDown } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/common/ui/command';
import { cn } from '@/libs/utils/utils';
import { Label } from './ui/label';

const QRCodeScanner: React.FC = () => {
  const devices = useDevices();
  const [result, setResult] = useState<IDetectedBarcode[]>([]);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [selectedDevice, setSelectedDevice] = useState<
    MediaDeviceInfo | undefined
  >(undefined);
  const [open, setOpen] = useState(false);
  const handleOnClick = (detect: IDetectedBarcode[]) => {
    setResult((prevResult) => [...prevResult, detect[0]]);
  };
  useEffect(() => {
    if (devices.length > 0) {
      const storedDeviceId = localStorage.getItem('preferredCameraId');
      const savedDevice = devices.find((d) => d.deviceId === storedDeviceId);
      setSelectedDevice(savedDevice || devices[0]);
    }
  }, [devices, result]);
  const toggleIsPaused = () => {
    setIsPaused(!isPaused);
  };

  const handleDeviceSelect = (newDevice: MediaDeviceInfo) => {
    setSelectedDevice(newDevice);
    localStorage.setItem('preferredCameraId', newDevice.deviceId);
  };
  return (
    <div className="grid h-full w-full grid-cols-2 items-center">
      <Scanner
        paused={isPaused}
        constraints={{
          deviceId: selectedDevice?.deviceId,
          facingMode: 'environment'
        }}
        allowMultiple={true}
        styles={{
          container: { width: '100%', height: '100%' },
          video: { width: '100%', height: '100%' },
          finderBorder: 2
        }}
        components={{ audio: false, zoom: false }}
        formats={['qr_code']}
        scanDelay={1000}
        onScan={(result) => handleOnClick(result)}
      />
      <div className={cn('flex h-full flex-col items-center gap-4 p-4')}>
        <div className="flex w-full flex-col gap-2">
          <Label>Camera</Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="flex w-full"
              >
                <div className="flex w-full justify-start overflow-hidden overflow-ellipsis">
                  {selectedDevice?.label
                    ? devices.find(
                        (device) => device.deviceId === selectedDevice.deviceId
                      )?.label
                    : 'Select device...'}
                </div>
                <ChevronsUpDown className="grow opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search device..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No device found.</CommandEmpty>
                  <CommandGroup>
                    {devices.map((device) => (
                      <CommandItem
                        key={device.deviceId}
                        value={device.label}
                        onSelect={(currentValue) => {
                          const selected = devices.find(
                            (d: MediaDeviceInfo) => d.label === currentValue
                          );
                          if (selected) {
                            handleDeviceSelect(selected);
                            setOpen(false);
                          }
                        }}
                      >
                        {device.label}
                        <Check
                          className={cn(
                            'ml-auto',
                            selectedDevice?.deviceId === device.deviceId
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <Button className="w-full" onClick={toggleIsPaused}>
          {isPaused ? 'On' : 'Off'}
        </Button>
        <div className="flex w-full grow flex-col items-center gap-2 overflow-y-auto">
          {result.map((item, index) => (
            <div
              className="w-full rounded bg-muted p-2 text-xs shadow-inner"
              key={index}
            >
              {item.rawValue}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QRCodeScanner;
