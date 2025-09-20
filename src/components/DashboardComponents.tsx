interface AnalyticsProps{
 analyticHeading: string
 icon: string
 value: string
 metrics: string
 duration: string
 metricColor: string
}

export const DashboardAnalytics = ({ analyticHeading, icon, value, metrics, duration, metricColor }:AnalyticsProps) => {
 return(
  <div className="border-2 border-black rounded-sm px-6 py-2 w-[23%]">

    <div className="flex justify-between">
      <ul className="list-none flex flex-col gap-0">
        <li className="text-[13px]">{analyticHeading}</li>
        <li className="font-bold">{value}</li>
      </ul>
      
      <img src={icon} alt="icon" className="w-8 h-8"/>
    </div>

    <span className="text-[12px]">
     <span style={{color: metricColor}}>
      {metrics}
    </span> from last {duration}
    </span>

  </div>
 )
}

export const RefundCancellationTrends = () => {
  return(
    <section className="w-[65%] border-1 border-black p-4 rounded-md">
      <div className="flex justify-between">
        <span className="inline-block text-[18px] font-bold">Refund & Cancellation Trends</span>

        <ul className="list-none flex gap-2 items-center mr-[5rem]">
          <li className="duration-hover">Weekly</li>
          <li className="duration-hover">Monthly</li>
          <li className="duration-hover">Yearly</li>
        </ul>

      </div>
    </section>
  )
}

interface ActivityItemsProps{
  icon: string
  heading: string 
  text: string 
  timeStamp: string
}

export const ActivityItems = ({ icon, heading, text, timeStamp }: ActivityItemsProps) => {
  return(
    <div className="flex gap-2 mt-2">
      <img src={icon} alt="icon" className="h-8"/>

      <ul className="list-none text-[13px]">
        <li className="font-bold">{heading}</li>
        <li className="text-[11px]">{text}</li>
        <li>{timeStamp} hour (s) ago</li>
      </ul>
    </div>
  )
}

export const PendingApproval = () => {
 return(
   <section className="border-1 border-gray-500 p-3.5 mt-3 rounded-md overflow-x-auto">
        <div className="flex justify-between items-center">
          <span>Pending Approvals</span>
          <span className="text-blue-600 hover:underline hover:cursor-pointer">View All</span>
        </div>

         <table className="min-w-full text-sm text-left text-gray-700">
             <thead className="bg-gray-100 text-gray-900 text-xs uppercase">
                <tr>
                 <th className="table-header">Request ID</th>
                 <th className="table-header">Date</th>
                 <th className="table-header">Customer Name</th>
                 <th className="table-header">Type</th>
                 <th className="table-header">Email</th>
                 <th className="table-header">Amount</th>
                 <th className="table-header">Status</th>
                 <th className="table-header">Action</th>
                </tr>
             </thead>
             
              {/* data entires when the backend is connected
             <tbody>
               {data.map((row) => (
                    <tr key={requestID}>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                  </tr>
               ))}
             </tbody> */}
         </table>
    </section>
 )
}