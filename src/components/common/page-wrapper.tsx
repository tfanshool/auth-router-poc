import { motion } from 'framer-motion';

export interface LayoutProps {
  children: JSX.Element;
}
const PageWrapper = (props: LayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, filter: 'blur(5px)', scale: 0.99 }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
      exit={{ opacity: 0, y: 0, filter: 'blur(5px)', scale: 0.99 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="h-full rounded bg-muted"
    >
      {props.children}
    </motion.div>
  );
};

export default PageWrapper;
