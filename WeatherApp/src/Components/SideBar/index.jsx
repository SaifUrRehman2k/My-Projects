import React, { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import { sideBarState } from "../../App/AppSlices/Sidebar";

const SideBar = ({ userType = "admin"}) => {



  const menu = [
    { name: "Current", icon: 'DashboardIcon', path: "/admin" },
    { name: "Hourly", icon: 'StudentIcon', path: "/admin/students" },
    { name: "10 days", icon: 'TeacherIcon', path: "/admin/teachers" },
    { name: "Radar", icon: 'LibraryBooksIcon', path: "/admin/courses" },
    { name: "Blog", icon: 'AnalyticsIcon', path: "/admin/analytics" },
    { name: "Settings", icon: 'SettingsIcon', path: "/admin/settings" },
  ];

  const isOpen = useSelector(state => state.sideBarState.openState)
  console.log(sideBarState);
  const dispatch = useDispatch()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  

  return (
    <>
      {/* {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-[rgba(173,173,173,0.5)] blur-lg z-30 lg:hidden"
        />
      )} */}


      <aside
        className={`fixed inset-y-0 left-0 w-64 h-full transforms shadow-[2px_0px_8px] shadow-gray-200 transition-transform duration-300 ease-in-out z-[999] ${isOpen?'translate-x-0' : '-translate-x-full shadow-none' }`}
      >
        <div className="h-full bg-slate-200 text-white shadow-lg flex flex-col ">
          <div className="flex items-center justify-between px-5 py-5 s">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-gray-900 font-bold">🎓</span>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Education Portal</div>
                {/* <div className="text-xs text-gray-300"></div> */}
              </div>
            </div>

            <button
              className="lg:hidden text-gray-800 hover:text-emerald-300 smooth"
              aria-label="close sidebar"
              onClick={()=> {dispatch(sideBarState())}}
            >
              ✕
            </button>
          </div>

          <nav className="flex-1 px-3 py-6 overflow-y-auto sidebar-scroll">
            {menu.map((item) => (
              <NavLink
                key={item.path}
                className='flex items-center gap-3 px-3 py-2 rounded-md mb-1 smooth text-gray-900 text-[1.2em] hover:bg-gray-300 "transition duration-1s00 ease-in-out'>
                {/* <span className="text-lg">{item.icon}</span> */}
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="px-4 py-4 border-t border-gray-700">
            <button

              className="w-full flex items-center gap-3 justify-center px-3 py-2 rounded-md text-gray-200 bg-blue-700 hover:bg-blue-500 smooth"
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
