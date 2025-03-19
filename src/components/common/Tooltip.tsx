import Popup from 'reactjs-popup';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { PopupActions, PopupProps } from 'reactjs-popup/dist/types';
import 'reactjs-popup/dist/index.css';
import { cn } from '../../utils/helpers/clsx';
//Implemented a custom tooltip based on raecths-popup with autopositioning
// and trigger events options
interface Props extends PopupProps {
  children: ReactNode;
  trigger: React.JSX.Element;
  tooltipClassName?: string;
}

const Tooltip = ({
  children,
  trigger,
  contentStyle,
  overlayStyle,
  open,
  onOpen,
  onClose,
  tooltipClassName,
  ...restProps
}: Props) => {
  const popupRef = useRef<PopupActions>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<'top center' | 'bottom center' | 'left center' | 'right center'>(
    'bottom center'
  );

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const scrollingElement = event.target as Node;

      const popupContent = contentRef.current;
      const popupOverlay = popupContent?.parentElement?.parentElement;

      const isInsidePopup = (node: Node | null): boolean => {
        if (!node) return false;
        return popupContent?.contains(node) || popupOverlay?.contains(node) || false;
      };

      if (!isInsidePopup(scrollingElement)) {
        if (popupRef.current && typeof popupRef.current.close === 'function') {
          popupRef.current.close();
        }
        onClose?.();
      }
    };

    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [onClose, open]);

  useEffect(() => {
    const calculatePosition = () => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        if (rect.bottom > viewportHeight) {
          setPosition('top center');
        } else if (rect.top < 0) {
          setPosition('bottom center');
        } else if (rect.right > viewportWidth) {
          setPosition('left center');
        } else if (rect.left < 0) {
          setPosition('right center');
        }
      }
    };

    calculatePosition();
  }, [open]);

  return (
    <Popup
      ref={popupRef}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      position={position}
      keepTooltipInside
      {...restProps}
      contentStyle={{ ...contentStyle }}
      overlayStyle={overlayStyle}
      arrow={false}
      modal={false}
      trigger={() => <div className={cn('tooltip-trigger', tooltipClassName)}>{trigger}</div>}
    >
      <div ref={contentRef}>
        <input type="radio" className="hidden" />
        {children}
      </div>
    </Popup>
  );
};

export default Tooltip;
