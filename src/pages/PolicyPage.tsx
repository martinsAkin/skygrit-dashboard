import { Outlet, NavLink } from 'react-router-dom';
import { FlightTypeToggle, PolicyDetails, SearchPolicy } from '../components/PolicyComponents'

const PolicyPage: React.FC = () => {
  return (
    <div>

      <main>
        <section className='flex justify-between my-3.5'>
         <div className='flex flex-col gap-0'>
           <h2 className='text-lg font-bold'>Policy Management</h2>
           <span className='text-[13px] font-bold'>Configure Refund and Cancellation Policy</span>
         </div>

          <button className='bg-blue-950 text-white rounded-md px-3.5 py-0 text-sm'>
            <NavLink to="/createPolicy">
                + New Policy
              </NavLink>
          </button>
        </section>
        <Outlet />

        <div className='flex gap-[1rem]'>
          <section className='flex'>
           <SearchPolicy />
          </section>

          <div className='flex flex-col gap-4 w-[100%]'>
            <FlightTypeToggle />
            <PolicyDetails />
          </div>

        </div>

      </main>
      
    </div>
  )
}

export default PolicyPage