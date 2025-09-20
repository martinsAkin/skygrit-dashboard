import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[20rem] px-4 py-[1.5rem] bg-[#030E20] text-gray-500">

         <div className="flex justify-between items-center">
           <img src="assets/arikImage.png" alt="dashboardLogo" className="h-[3rem] w-[7.5rem]" />
           <img src="assets/sidebar-left.png" alt="close-sidebar" className="h-[3rem]" />
         </div>

         <ul className="flex flex-col gap-2 mt-6 px-4">
          <SidebarItems
            icon="assets/house-simple.png"
            functionName="Dashboard"
            to="/dashboard"
           />
          <SidebarItems
            icon="assets/arrows-left-right.png"
            functionName="Requests"
            to="/requests"
           />
          <SidebarItems
            icon="assets/material-symbols_text-compare-outline.png"
            functionName="Policy Management"
            to="/policy-management"
           />
           <SidebarItems
            icon="assets/si_notifications-line.png"
            functionName="Alert & Notifications"
            to="/notifications"
           />
          <SidebarItems
            icon="assets/presentation-chart.png"
            functionName="Reports & Analytics"
            to="/analytics"
           />
           <SidebarItems
            icon="assets/user-gear.png"
            functionName="User Management"
            to="/users"
           />
           <SidebarItems
            icon="assets/watch.png"
            functionName="Audit Trail"
            to="/audit"
           />
           <SidebarItems
            icon="assets/link.png"
            functionName="Help & Support"
            to="/support"
           />
           <SidebarItems
            icon="assets/ix_user-manual.png"
            functionName="User Manual"
            to="/manual"
           />
           <SidebarItems
            icon="assets/gear-six.png"
            functionName="Settings"
            to="/settings"
           />
         </ul>

         <div className="mt-8">
           <div className="flex items-center gap-3 ml-2 mb-2">
               <div className="initials-placeholder">AA</div>
               <ul className="list-none">
                <li>Arik Air</li>
                <li>Admin Account</li>
               </ul>
           </div>

           <SidebarItems
            icon="assets/sign-out.png"
            functionName="Logout"
            to="/logout"
           />
           
         </div>

          <span className="flex items-center text-[13px]">Powered by 
           <img src="assets/trademark.png" alt="icon" className="w-12 ml-2" />
          </span>

    </div>
  )
}

interface SidebarItemsProps  {
 icon: string;
 functionName: string;
 to: string;
}

const SidebarItems = ({ icon, functionName, to }: SidebarItemsProps) => {
 return(
  <nav>
    <NavLink to={to} className="sidebar-list">
        <img src={icon} alt="icon" className="sidebar-icons"/>
         <li className="list-none">{functionName}</li>
      </NavLink>
  </nav>
 )
}
export default Sidebar