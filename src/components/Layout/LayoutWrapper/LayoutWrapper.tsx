import { GoSidebarExpand } from 'react-icons/go';
import { MAIN_SIDEBAR_OPTIONS } from '../../../constants/sidebar/options';
import { useSidebar } from '../../../contexts/SidebarContext';
import { Responsive } from '../../common';
import { Sidebar } from '../Sidebar';
import { Option } from '../Sidebar/components';
import { Outlet } from 'react-router-dom';
import { MobileTabbar } from '../MobileTabbar';
import { MobileOption } from '../MobileTabbar/components';
import { useMediaSize } from '../../../hooks/useMediaSize';

const LayoutWrapper = () => {
  const { isOpen, onClose, toggleSidebar } = useSidebar();
  //mediaSize used to manage margin of main content when sidebar is opened/closed
  const mediaSize = useMediaSize();
  return (
    <div className="flex h-screen bg-white">
      {/*Implemented a responsive component which is managing mobile, tablet,desktop components*/}

      <Responsive
        mobileVariant={
          <MobileTabbar>
            {MAIN_SIDEBAR_OPTIONS.map(({ Icon, title, path, subpaths }) => (
              <MobileOption
                key={path}
                Icon={Icon}
                classNames={{
                  mobileSubpathsContainer: 'mt-4 ',
                  mobileSubpathLink: 'hover:bg-blue-100 p-4 flex flex-1 rounded-sm',
                }}
                title={title}
                path={path}
                activeColor="text-blue-500"
                subpaths={subpaths}
              />
            ))}
          </MobileTabbar>
        }
        desktopVariant={
          <Sidebar
            width={`${isOpen ? '225px' : '70px'}`}
            customClassnames={{
              sidebarContainer: 'z-[1000] left-0 border-r border-slate-300 bg-white shadow-md',
              titleSection: 'p-4 border-b border-slate-300',
              titleImageWrapper: 'w-10 h-10 rounded-md bg-grey flex-shrink-0',
              titleImage: 'h-6 w-6',
              toggleButtonWrapper: 'h-12 justify-start border-t border-slate-300',
            }}
            toggleIcon={GoSidebarExpand}
            toggleSidebar={toggleSidebar}
            titleChildren={
              <>
                <span className="font-semibold text-slate-700">University Lib</span>
                <span className="text-xs text-slate-500">Brest, Belarus</span>
              </>
            }
            imgSrc={'https://masterpiecer-images.s3.yandex.net/a269bd637ca511ee91cc7a2f0d1382ba:upscaled'}
            isOpen={isOpen}
            onClose={onClose}
          >
            {MAIN_SIDEBAR_OPTIONS.map(({ Icon, title, path, subpaths }) => (
              <Option
                key={path}
                Icon={Icon}
                title={title}
                isOpen={isOpen}
                path={path}
                activeColor="text-blue-500"
                subpaths={subpaths}
              />
            ))}
          </Sidebar>
        }
      />

      <main
        className={`flex-1 overflow-auto p-6`}
        style={{
          marginLeft: mediaSize === 'desktop' ? (isOpen ? '225px' : '70px') : '0px',
          transition: 'margin-left 0.3s ease-in-out',
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutWrapper;
