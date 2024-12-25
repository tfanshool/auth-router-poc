import React, { useEffect, useState } from 'react';
import {
  IDetectedBarcode,
  Scanner,
  useDevices
} from '@yudiel/react-qr-scanner';
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
import { Button } from '@/components/common/ui/button';
import { Label } from '@/components/common/ui/label';

const ScannerAtomComponent: React.FC = () => {
  return <></>;
};

export default ScannerAtomComponent;
