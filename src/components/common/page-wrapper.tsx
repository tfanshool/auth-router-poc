import { cn } from '@/libs/utils/utils';
import { motion } from 'framer-motion';
import { ArrowLeftCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

export interface LayoutProps {
  children: JSX.Element;
  showPageTitle: boolean;
  showBack: boolean;
  pageTitle: string;
  transparentBackgorund: boolean;
}
const PageWrapper = (props: LayoutProps) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, filter: 'blur(5px)', scale: 0.99 }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
      exit={{ opacity: 0, y: 0, filter: 'blur(5px)', scale: 0.99 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className={cn(
        'flex grow flex-col overflow-auto md:p-3 lg:rounded-lg',
        !props.transparentBackgorund && 'bg-muted shadow-lg'
      )}
    >
      {(props.showPageTitle || props.showBack) && (
        <div className="mb-2 flex w-full items-center justify-start gap-4">
          {props.showBack && (
            <Link
              to={'..'}
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              <ArrowLeftCircle size={25} className="mt-1 cursor-pointer" />
            </Link>
          )}
          {props.showPageTitle && <h1 className="text-5xl font-bold">{props.pageTitle}</h1>}
        </div>
      )}
      <div className="flex h-96 grow flex-col overflow-x-hidden overflow-y-hidden">
        {props.children}
      </div>
    </motion.div>
  );
};

export default PageWrapper;
