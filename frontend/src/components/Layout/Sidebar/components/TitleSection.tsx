import { motion } from 'framer-motion';
import { cn } from '../../../../utils/helpers/clsx';
import { TitleSectionProps } from '../../../../types/sidebar';

const TitleSection = ({ isOpen, imgSrc, titleChildren, customClassnames }: TitleSectionProps) => {
  const { titleSection, titleImageWrapper, titleImage, titleChildren: titleChildrenClass } = customClassnames || {};

  return (
    <div className={cn('p-4 border-b border-slate-300', titleSection)}>
      <div className="flex items-center gap-2">
        {imgSrc && (
          <div className={cn('flex items-center justify-center', titleImageWrapper)}>
            <img src={imgSrc} className={cn('h-6 w-6', titleImage)} />
          </div>
        )}
        {isOpen && titleChildren && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={cn('flex flex-col overflow-hidden', titleChildrenClass)}
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {titleChildren}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TitleSection;
