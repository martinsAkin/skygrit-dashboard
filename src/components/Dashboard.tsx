import Headbar from "./Headbar"

const Dashboard = () => {
  return (
    <div className="w-[100%] px-4">
      <Headbar
        firstname="Martins"
        badgeNo="9+"
        fullname="Ajayi Martins"
      />

      <div className="flex justify-between items-center pt-4">
        <ul className="list-none">
          <li className="text-2xl">Dashboard</li>
          <li className="text-[13.5px]">Overview of airline refund and cancellation activities</li>
        </ul>

        <div className="border-2 border-gray-500 p-1 rounded-sm">
          <input type="date" name="dateRange" id="range" />
        </div>
      </div>

      <div className="flex gap-4 mt-6">
       <DashboardAnalytics
         analyticHeading="Total Refunds"
         value="1,284"
         icon="assets/Container.png"
         metrics="+12.5%"
         duration="month"
         metricColor="green"
       />
       <DashboardAnalytics
        analyticHeading="Pending Approvals"
        value="42"
        icon="assets/Container (1).png"
        metrics="+8.2%"
        duration="week"
        metricColor="red"
      />
      <DashboardAnalytics
        analyticHeading="Total Cancellations"
        value="876"
        icon="assets/Container (2).png"
        metrics="+23.1%"
        duration="month"
        metricColor="red"
      />
      <DashboardAnalytics
        analyticHeading="Settled Amount"
        value="#534,000"
        icon="assets/Container (3).png"
        metrics="+5.3%"
        duration="month"
        metricColor="green"
      />
      </div>

      <div className="flex gap-[2rem] mt-6">
        <RefundCancellationTrends/>

        <section className="w-[35%] border-1 border-black p-4 rounded-md">
          <div className="flex justify-between">
            <span>Recent Activity</span>
            <span className="text-blue-600 hover:underline hover:cursor-pointer">View all</span>
          </div>

          <div>
            <ActivityItems
              icon="assets/calender.png"
              heading="New cancellation request"
              text="Customer requested cancellation for booking #AC3872"
              timeStamp="1"
            />
            <ActivityItems
              icon="assets/calender.png"
              heading="Refund policy updated"
              text="Admin user modified the refund policy for economy class"
              timeStamp="3"
            />
            <ActivityItems
              icon="assets/calender.png"
              heading="New cancellation request"
              text="Customer requested cancellation for booking #AC3872"
              timeStamp="4"
            />
            <ActivityItems
              icon="assets/calender.png"
              heading="Refund policy updated"
              text="Admin user modified the refund policy for economy class"
              timeStamp="5"
            />
            <ActivityItems
              icon="assets/calender.png"
              heading="New cancellation request"
              text="Customer requested cancellation for booking #AC3872"
              timeStamp="6"
            />
          </div>
        </section>

      </div>

      <section className="border-1 border-gray-500 p-3.5 mt-3 rounded-md">
        <div className="flex justify-between items-center">
          <span>Pending Approvals</span>
          <span className="text-blue-600 hover:underline hover:cursor-pointer">View All</span>
        </div>
      </section>
  
    </div>
  )
}

interface AnalyticsProps{
 analyticHeading: string
 icon: string
 value: string
 metrics: string
 duration: string
 metricColor: string
}

const DashboardAnalytics = ({ analyticHeading, icon, value, metrics, duration, metricColor }:AnalyticsProps) => {
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

const RefundCancellationTrends = () => {
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

const ActivityItems = ({ icon, heading, text, timeStamp }: ActivityItemsProps) => {
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

export default Dashboard