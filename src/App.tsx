import './index.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <section className='flex gap-2'>
      <Sidebar />
      <Dashboard />
    </section>
  )
}

export default App
