import TextEditorComponent from '@/components/common/text-editor';

const MoveItPage: React.FC = () => {
  return (
    <div className="grid h-full grid-cols-1 gap-4 overflow-y-auto overflow-x-hidden">
      <TextEditorComponent />
    </div>
  );
};

export default MoveItPage;
