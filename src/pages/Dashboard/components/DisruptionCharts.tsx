import {
 BarChart,
 Bar,
 XAxis,
 YAxis,
 CartesianGrid,
 Tooltip,
 Legend,
 ResponsiveContainer,
} from "recharts";

const disruptionData = [
 {
  disruption: "Cancellation",
  pending: 24,
  inprogress: 18,
  review: 12,
  approved: 35,
  declined: 8,
 },
 {
  disruption: "Accommodation",
  pending: 15,
  inprogress: 22,
  review: 9,
  approved: 28,
  declined: 5,
 },
 {
  disruption: "Rebooking",
  pending: 40,
  inprogress: 34,
  review: 17,
  approved: 42,
  declined: 11,
 },
 {
  disruption: "Reprotection",
  pending: 100,
  inprogress: 65,
  review: 11,
  approved: 170,
  declined: 2,
 },
 {
  disruption: "Compensation",
  pending: 30,
  inprogress: 20,
  review: 15,
  approved: 53,
  declined: 9,
 },
];

const DisruptionChart = () => {
 return (
  <ResponsiveContainer width="100%" height="100%">
   <BarChart
    data={disruptionData}
    margin={{
     top: 10,
     right: 10,
     left: 0,
     bottom: 10,
    }}
   >
    <CartesianGrid strokeDasharray="3 3" vertical={false} />
    <XAxis
     dataKey="disruption"
     tick={{ fontSize: 12 }}
     axisLine={false}
     tickLine={false}
    />
    <YAxis axisLine={false} tickLine={false} allowDecimals={false} />

    <Tooltip />
    <Legend />

    <Bar
     dataKey="pending"
     name="Pending"
     fill="#94A3B8"
     radius={[4, 4, 0, 0]}
    />

    <Bar
     dataKey="inProgress"
     name="In Progress"
     fill="#3B82F6"
     radius={[4, 4, 0, 0]}
    />
    <Bar dataKey="review" name="Review" fill="#F59E0B" radius={[4, 4, 0, 0]} />

    <Bar
     dataKey="approved"
     name="Approved"
     fill="#22C55E"
     radius={[4, 4, 0, 0]}
    />

    <Bar
     dataKey="declined"
     name="Declining"
     fill="#EF4444"
     radius={[4, 4, 0, 0]}
    />
   </BarChart>
  </ResponsiveContainer>
 );
};

export default DisruptionChart;
