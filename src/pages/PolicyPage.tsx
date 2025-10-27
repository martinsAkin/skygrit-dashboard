/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet, NavLink } from 'react-router-dom';
import { FlightTypeToggle, PolicyDetails, SearchPolicy } from '../components/PolicyComponents'
import { useState } from 'react';
import flightPolicies from '../../public/data/FlightPolicyType.json'
import type { Policy, FlightType } from '../interface';

const PolicyPage: React.FC = () => {
    const [selectedFlightType, setSelectedFlightType] = useState<FlightType | null>(null);
    const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null)
    
    const handleFlightTypeClick = (type: FlightType) => {
      setSelectedFlightType(type);
      setSelectedPolicy(null)
    }

    const handlePolicyClick = (policy: Policy) => {
      setSelectedPolicy(policy)
    }
    const currentPolicies: Policy[] = selectedFlightType && 
      Array.isArray(flightPolicies[selectedFlightType])
      ? flightPolicies[selectedFlightType]
      : [];


    // const [ selectedSubTab, setSelectedSubTab ] = useState<string> ("Domestic")
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
            <SearchPolicy 
              policies={currentPolicies}
              selectedFlightType={selectedFlightType}
              selectedPolicy={selectedPolicy}
              onSelectPolicy={handlePolicyClick}
            />
            </section>
          

            <div className='flex flex-col gap-4 w-[100%]'>
                <div className="bg-[#EFF6FF] p-[5px] flex rounded-2xl w-max h-max gap-4">
                  <FlightTypeToggle 
                    selectedFlightType={selectedFlightType}
                    onSelect={handleFlightTypeClick}
                  />
                </div>
                  <PolicyDetails 
                    selectedPolicy={selectedPolicy}
                    selectedFlightType={selectedFlightType}
                  />
                
            </div>
        </div>
      </main>
      
    </div>
  )
}

export default PolicyPage