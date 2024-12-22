import { Avatar, AvatarFallback, AvatarImage } from '@/components/common/ui/avatar';
import { Button } from '@/components/common/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/ui/card';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/common/ui/form';
import { Label } from '@/components/common/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/common/ui/popover';
import { cn } from '@/libs/utils/utils';
import { CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from 'cmdk';
import { ChevronsUpDown, Command, Check } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from '@/components/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Separator } from '@/components/common/ui/separator';

const formSchema = z.object({
  control_default_site: z.string(),
  control_scanning_mode: z.string()
});
function ProfilePage() {
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
    }
  ] as const;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="rounded-md bg-slate-950">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error('Form submission error', error);
    }
  }
  return <div className="flex h-full w-full items-center justify-center"></div>;
}

export default ProfilePage;
