import './index.css'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import PolicyPage from './pages/PolicyPage'
import CreatePolicy from './components/CreatePolicy'
import Login from './pages/Login'
import RequestReview from './pages/RequestReview'


function App() {

  const location = useLocation();
  const hideSidebarRoutes = ["/login"];
  const shouldShowSidebar = !hideSidebarRoutes.includes(location.pathname)

  return (
    // <Router>

      <div className='flex bg-[#f9f9f9]'>
          {shouldShowSidebar && <Sidebar /> }
          {/* <Sidebar /> */}

          <main className='flex-1 p-[24px]'>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/policy-management" element={<PolicyPage />} />
              <Route path='/requests' element={<RequestReview />}/>

              <Route path='/createPolicy' element={<CreatePolicy />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </main>
                
      </div>

    // </Router>
  )
}

export default App


// import './index.css'
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
// import Sidebar from './components/Sidebar'
// import Dashboard from './pages/Dashboard'
// import PolicyPage from './pages/PolicyPage'
// import CreatePolicy from './components/CreatePolicy'
// import Login from './pages/Login'

// function AppLayout() {
//   const location = useLocation();
//   const hideSidebarRoutes = ["/login"];
//   const shouldShowSidebar = !hideSidebarRoutes.includes(location.pathname);

//   return (
//     <div className='flex bg-[#f9f9f9]'>
//       {shouldShowSidebar && <Sidebar />}
//       <main className='flex-1 p-[24px]'>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/policy-management" element={<PolicyPage />} />
//           <Route path='/createPolicy' element={<CreatePolicy />} />
//           <Route path='/login' element={<Login />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppLayout />
//     </Router>
//   );
// }

// export default App