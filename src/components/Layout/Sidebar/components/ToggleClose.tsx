import { ToggleCloseProps } from '../../../../types/sidebar';
import { motion } from 'framer-motion';
import { cn } from '../../../../utils/helpers/clsx';

const ToggleClose = ({
  isOpen,
  toggleSidebar,
  toggleTitle,
  toggleIcon: ToggleIcon,
  customClassnames = {},
}: ToggleCloseProps) => {
  const { toggleButtonWrapper, toggleIcon, toggleText } = customClassnames;

  return (
    <button onClick={toggleSidebar} className={cn('w-full flex items-center', toggleButtonWrapper)}>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn('text-lg ml-3', toggleIcon)}
      >
        <ToggleIcon className="text-xl" />
      </motion.div>
      {isOpen && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn('ml-2 text-sm font-medium text-slate-700', toggleText)}
        >
          {toggleTitle}
        </motion.span>
      )}
    </button>
  );
};
export default ToggleClose;
