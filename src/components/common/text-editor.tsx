import { FloatingMenu, BubbleMenu, EditorProvider } from '@tiptap/react';

import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import { Toggle } from '@/components/common/ui/toggle';
import StarterKit from '@tiptap/starter-kit';
import { Bold, Italic } from 'lucide-react';

const extensions = [StarterKit, BulletList, ListItem];

const content = '<p>Hello World!</p>';
const TextEditorComponent = () => {
  return (
    <EditorProvider
      extensions={extensions}
      content={content}
      editable={true}
      injectCSS={true}
      autofocus={false}
    >
      <FloatingMenu
        className="rounded-md bg-primary px-1 font-mono text-sm text-primary-foreground"
        editor={null}
      >
        Type...
      </FloatingMenu>
      <BubbleMenu
        className="flex gap-1 overflow-hidden rounded-l-full rounded-r-full border bg-background text-xs"
        editor={null}
      >
        <Toggle variant="default" size={'sm'} aria-label="Toggle italic">
          <Bold />
        </Toggle>
        <Toggle variant="default" size={'sm'} aria-label="Toggle italic">
          <Italic />
        </Toggle>
        <Toggle variant="default" size={'sm'} aria-label="Toggle italic">
          <Italic />
        </Toggle>
        <Toggle variant="default" size={'sm'} aria-label="Toggle italic">
          <Italic />
        </Toggle>
        <Toggle variant="default" size={'sm'} aria-label="Toggle italic">
          <Italic />
        </Toggle>
      </BubbleMenu>
    </EditorProvider>
  );
};

export default TextEditorComponent;
