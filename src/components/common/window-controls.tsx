import React from 'react';
import { ChevronsLeftRight, Grip, Minus, X } from 'lucide-react';
import { getCurrentWindow } from '@tauri-apps/api/window';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/common/ui/tooltip';
type ControlPosition = 'left' | 'right';

interface WindowControlsProps {
  position?: ControlPosition;
  draggable?: boolean;
}
const WindowControls: React.FC<WindowControlsProps> = ({
  position = 'left',
  draggable = true
}) => {
  const appWindow = getCurrentWindow();
  const minimizeWindow = async () => {
    // Logic to minimize the window
    await appWindow.minimize();
  };

  const maximizeWindow = async () => {
    // Logic to maximize the window
    await appWindow.toggleMaximize();
  };

  const closeWindow = async () => {
    // Logic to close the window
    await appWindow.close();
  };

  return (
    <div className="group flex flex-row gap-1 transition-all duration-200">
      {draggable && position === 'left' && (
        <Tooltip>
          <TooltipTrigger>
            <Grip
              data-tauri-drag-region
              strokeWidth={1}
              className="mr-1 size-4 opacity-0 hover:cursor-pointer group-hover:opacity-100"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Move window</p>
          </TooltipContent>
        </Tooltip>
      )}
      <div
        onClick={closeWindow}
        className="flex size-5 items-center justify-center rounded-full bg-rose-500 p-0.5 text-rose-800 hover:cursor-pointer"
      >
        <X
          className="opacity-0 group-hover:opacity-100"
          strokeWidth={10}
          size={10}
        />
      </div>
      <div
        onClick={minimizeWindow}
        className="flex size-5 items-center justify-center rounded-full bg-amber-500 p-0.5 text-amber-800 hover:cursor-pointer"
      >
        <Minus
          className="opacity-0 group-hover:opacity-100"
          strokeWidth={10}
          size={10}
        />
      </div>

      <div
        data-tauri-drag-region
        onClick={maximizeWindow}
        className="flex size-5 items-center justify-center rounded-full bg-teal-500 p-0.5 text-teal-900 hover:cursor-pointer"
      >
        <ChevronsLeftRight
          className="-rotate-45 opacity-0 group-hover:opacity-100"
          strokeWidth={10}
          size={10}
        />
      </div>

      {draggable && position === 'right' && (
        <Tooltip>
          <TooltipTrigger>
            <Grip
              data-tauri-drag-region
              strokeWidth={1}
              className="ml-1 size-4 opacity-0 hover:cursor-pointer group-hover:opacity-100"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Move window</p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
};

export default WindowControls;
