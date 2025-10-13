import { NavLink } from "react-router-dom"
import prevPage from "/assets/Icons/move-left.png"

const CreatePolicy = () => {
  return (
    <div>
       <section className='flex justify-between mt-6'>
           <div className='flex flex-col gap-0'>
             <h2 className='text-lg font-bold'>Policy Management</h2>
             <span className='text-[13px] font-bold'>Configure Refund and Cancellation Policy</span>
           </div>


               <button className='bg-white text-blue-950 rounded-md px-3.5 py-0 text-md'>
                  <NavLink to="/policy-management">
                     <img src={prevPage} alt="go back" className="inline-block mr-2 h-[20px] w-[20px]"/>
                     Back
                  </NavLink>
               </button>
            
           
        </section>

        <span className="text-2xl font-bold inline-block my-4.5">Create New Policy</span>

        <form className="border border-gray-500 p-3.5 pb-8 rounded-lg">
           <section className="flex gap-8">
            <div className="w-[50%]">
             <label htmlFor="cabinType" className="block">Cabin Type</label>
             <select name="cabinType" id="cabinType" className="p-3 border border-gray-500 w-[100%] rounded-md focus:outline-none">
                <option value="select">Select</option>
             </select>
            </div>
            <div className="w-[50%]">
             <label htmlFor="cabinType" className="block">Status</label>
             <select name="status" id="status" className="p-3 border border-gray-500 w-[100%] rounded-md focus:outline-none">
                <option value="inactive">Inactive</option>
                <option value="active">Active</option>
                <option value="disabled">Disabled</option>
             </select>
            </div>
           </section>

           <div className="mt-4">
            <label htmlFor="descText" className="block">Description*</label>
            <textarea name="policyDesc" id="policyDesc" className="border border-gray-400 p-2.5 w-[100%] rounded-md focus:outline-none" placeholder="Enter policy description">
            </textarea>
           </div>

            <div className="flex gap-2.5 place-content-end mt-6">
             <button className="p-2.5 rounded-lg text-[13px] text-black bg-white border border-gray-400">Cancel</button>
             <button className="p-2.5 rounded-lg text-[13px] bg-blue-900 text-white">Create Policy</button>
            </div>
        </form>
    </div>
  )
}

export default CreatePolicy