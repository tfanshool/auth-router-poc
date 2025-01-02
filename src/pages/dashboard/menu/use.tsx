import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { cn } from '@/libs/utils/utils';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/common/ui/form';
import { Button } from '@/components/common/ui/button';
import { Input } from '@/components/common/ui/input';
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@/components/common/ui/popover';
import {
  ChevronsUpDown,
  Check,
  CalendarIcon,
  ScanQrCode,
  X,
  UserPlus
} from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/common/ui/command';
import { Calendar } from '@/components/common/ui/calendar';

const formSchema = z.object({
  deployed_to: z.string(),
  room: z.string(),
  location: z.string(),
  project: z.string(),
  department: z.string(),
  length_of_need: z.coerce.date()
});

function UseItPage() {
  const languages = [
    {
      label: 'English',
      value: 'en'
    },
    {
      label: 'French',
      value: 'fr'
    },
    {
      label: 'India',
      value: 'in'
    },
    {
      label: 'German',
      value: 'de'
    },
    {
      label: 'Spanish',
      value: 'es'
    },
    {
      label: 'Portuguese',
      value: 'pt'
    },
    {
      label: 'Russian',
      value: 'ru'
    },
    {
      label: 'Japanese',
      value: 'ja'
    },
    {
      label: 'Korean',
      value: 'ko'
    },
    {
      label: 'Chinese',
      value: 'zh'
    },
    {
      label: 'Italian',
      value: 'it'
    },
    {
      label: 'Dutch',
      value: 'nl'
    },
    {
      label: 'Swedish',
      value: 'sv'
    },
    {
      label: 'Norwegian',
      value: 'no'
    },
    {
      label: 'Danish',
      value: 'da'
    },
    {
      label: 'Finnish',
      value: 'fi'
    },
    {
      label: 'Polish',
      value: 'pl'
    },
    {
      label: 'Czech',
      value: 'cs'
    },
    {
      label: 'Hungarian',
      value: 'hu'
    },
    {
      label: 'Turkish',
      value: 'tr'
    },
    {
      label: 'Greek',
      value: 'el'
    },
    {
      label: 'Arabic',
      value: 'ar'
    },
    {
      label: 'Hebrew',
      value: 'he'
    }
  ] as const;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      length_of_need: new Date()
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-0 rounded-md bg-slate-950 p-0 font-mono">
          <code className="font-mono text-xs text-white">
            {JSON.stringify(values, null, 1)}
          </code>
        </pre>
      );
    } catch (error) {
      console.error('Form submission error', error);
      toast.error('Failed to submit the form. Please try again.');
    }
  }
  return (
    <div className="grid h-full grid-cols-1 gap-4 overflow-y-auto overflow-x-hidden">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-4 p-1"
        >
          {/* `Deployed To` Controllers */}
          <div className="col-span-12 lg:col-span-6">
            <FormField
              control={form.control}
              name="deployed_to"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Deployed To</FormLabel>
                  <div className="flex flex-row items-center gap-1">
                    <Popover>
                      <PopoverTrigger className="w-full" asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              'justify-between',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value
                              ? languages.find(
                                  (language) => language.value === field.value
                                )?.label
                              : 'Select language'}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>

                      <PopoverContent className="w-full p-0">
                        <Command className="w-full">
                          <CommandInput
                            onValueChange={(e) => console.log(e)}
                            placeholder="Search language..."
                          />
                          <CommandList>
                            <CommandEmpty>No language found.</CommandEmpty>
                            <CommandGroup>
                              {languages.map((language) => (
                                <CommandItem
                                  value={language.label}
                                  key={language.value}
                                  onSelect={() => {
                                    form.setValue(
                                      'deployed_to',
                                      language.value
                                    );
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      'mr-2 h-4 w-4',
                                      language.value === field.value
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                    )}
                                  />
                                  {language.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <Button
                      className="aspect-square"
                      variant="destructive"
                      size="icon"
                      type="button"
                      onClick={() => form.setValue('deployed_to', '')}
                    >
                      <X />
                    </Button>
                    <Button
                      className="aspect-square"
                      variant="outline"
                      size="icon"
                      type="button"
                    >
                      <ScanQrCode />
                    </Button>
                    <Button
                      className="aspect-square"
                      variant="default"
                      size="icon"
                      type="button"
                    >
                      <UserPlus />
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* `Room` Controller */}
          <div className="col-span-12 lg:col-span-6">
            <FormField
              control={form.control}
              name="room"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Room</FormLabel>
                  <div className="flex flex-row items-center gap-1">
                    <Popover>
                      <PopoverTrigger className="w-full" asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              'justify-between',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value
                              ? languages.find(
                                  (language) => language.value === field.value
                                )?.label
                              : 'Select language'}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="p-0">
                        <Command>
                          <CommandInput placeholder="Search language..." />
                          <CommandList>
                            <CommandEmpty>No language found.</CommandEmpty>
                            <CommandGroup>
                              {languages.map((language) => (
                                <CommandItem
                                  value={language.label}
                                  key={language.value}
                                  onSelect={() => {
                                    form.setValue('room', language.value);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      'mr-2 h-4 w-4',
                                      language.value === field.value
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                    )}
                                  />
                                  {language.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <Button
                      className="aspect-square"
                      variant="destructive"
                      size="icon"
                      type="button"
                      onClick={() => form.setValue('room', '')}
                    >
                      <X />
                    </Button>
                    <Button
                      className="aspect-square"
                      variant="outline"
                      size="icon"
                      type="button"
                    >
                      <ScanQrCode />
                    </Button>
                    <Button
                      className="aspect-square"
                      variant="default"
                      size="icon"
                      type="button"
                    >
                      <UserPlus />
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* `Location` Controller */}
          <div className="col-span-12 lg:col-span-6">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* `Project` Cotroller */}
          <div className="col-span-12 lg:col-span-6">
            <FormField
              control={form.control}
              name="project"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Project</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            'justify-between',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value
                            ? languages.find(
                                (language) => language.value === field.value
                              )?.label
                            : 'Select language'}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Command>
                        <CommandInput placeholder="Search language..." />
                        <CommandList>
                          <CommandEmpty>No language found.</CommandEmpty>
                          <CommandGroup>
                            {languages.map((language) => (
                              <CommandItem
                                value={language.label}
                                key={language.value}
                                onSelect={() => {
                                  form.setValue('project', language.value);
                                }}
                              >
                                <Check
                                  className={cn(
                                    'mr-2 h-4 w-4',
                                    language.value === field.value
                                      ? 'opacity-100'
                                      : 'opacity-0'
                                  )}
                                />
                                {language.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* `Department` Controller */}
          <div className="col-span-12 lg:col-span-6">
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Department</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            'justify-between',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value
                            ? languages.find(
                                (language) => language.value === field.value
                              )?.label
                            : 'Select language'}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Command>
                        <CommandInput placeholder="Search language..." />
                        <CommandList>
                          <CommandEmpty>No language found.</CommandEmpty>
                          <CommandGroup>
                            {languages.map((language) => (
                              <CommandItem
                                value={language.label}
                                key={language.value}
                                onSelect={() => {
                                  form.setValue('department', language.value);
                                }}
                              >
                                <Check
                                  className={cn(
                                    'mr-2 h-4 w-4',
                                    language.value === field.value
                                      ? 'opacity-100'
                                      : 'opacity-0'
                                  )}
                                />
                                {language.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* `Length of Need` Controller */}
          <div className="col-span-12 lg:col-span-6">
            <FormField
              control={form.control}
              name="length_of_need"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Lenght of Need</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Reset & Submit Buttons */}
          <div className="col-span-12 flex justify-end gap-2">
            <Button
              type="button"
              variant="destructive"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default UseItPage;
