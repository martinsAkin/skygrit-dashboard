import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import PolicyPage from './pages/PolicyPage'
import CreatePolicy from './components/CreatePolicy'


function App() {

  return (
    <Router>
      {/* <section className='flex gap-2'>
        <Sidebar />
        <Dashboard />
      </section>

      <PolicyPage /> */}

      <div className='flex bg-[#f9f9f9]'>
          <Sidebar />

          <main className='flex-1 p-[24px]'>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/policy-management" element={<PolicyPage />} >
                {/* <Route path='createPolicy' element={<CreatePolicy />} /> */}
              </Route>
              <Route path='/createPolicy' element={<CreatePolicy />} />
            </Routes>
          </main>
      </div>

    </Router>
  )
}

export default App
