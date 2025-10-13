/* eslint-disable @typescript-eslint/no-explicit-any */
import type { VerifyClaimsProps } from "../interface";
import historyClock from "/assets/Icons/historyIcon.png"
import cancel from "/assets/Icons/x.png"
import confirm from "/assets/Icons/check.png"
import downloadClip from "/assets/Icons/clip.png"
import calender from "/assets/Icons/calender.png"
// import send from "/assets/Icons/send.png"
import user from "/assets/Icons/user.png"


interface ReviewHeadingProps {
 reqNo: number;
 // reqDate should be a  date, to review later
 reqDate: string;
}

export const ReviewHeading = ({ reqNo, reqDate }: ReviewHeadingProps) => {
  return (
    <div>
       <h1 className="text-2xl inline-block bg-gold-400">Review Request { reqNo }</h1>
       <span className="text-red-500 block text-[13px]">Submitted on {reqDate}</span>
    </div>
  )
}


interface CustomerDetailsProps{
 customerName: string;
 customerEmail: string;
 bookingRefNo: string;
 reqType: string;
 reqId: any;
 flightDate: any;
 ticketClass: string;
 approvedBy: string;
 reason: any;
 ticketType: string;
 TicketSale: any;
 route: string;
 approvedOn: any;
 baseFare: number;
 taxGovtFee: number;
 FuelSurcharge: number;
 serviceFee: number;
 ancillary: number;
 total: number;
 refundAmount: any;
 bankName: string;
 accountNumber: any;
}

export const RequestDetailsTable = ({
 customerName, 
 customerEmail,
 bookingRefNo,
 reqType,
 reqId,
 reason,
 flightDate,
 ticketClass,
 ticketType,
 approvedBy,
 approvedOn,
 route,
 TicketSale,
 baseFare,
 taxGovtFee,
 FuelSurcharge,
 serviceFee,
 ancillary,
 total,
 refundAmount,
 bankName,
 accountNumber
}: CustomerDetailsProps) => {
 return(
  <div className="border border-gray-300 rounded-lg w-[35rem]">
    <header className="flex justify-between px-3.5 py-4">
     <div>Request Details</div>
     <div className="bg-gray-300 p-1.5 rounded-2xl text-[12px]">* pending</div>
    </header>
    <hr />
    <main className="p-2.5 flex gap-[2rem]">
       <ul className="details-list">
         <li>
           <h1 className="details-heading">Customer</h1>
           <div className="flex items-center gap-4">
               <div className="bg-[#DBEAFE] p-1.5 rounded-[50%] h-max w-max">
                  <img src={user} alt="p" className="w-4.5 h-4.5"/>
                </div>
             <div>
               <li className="details-span">{customerName}</li>
               <li className="text-[11px]">{customerEmail}</li>
             </div>
           </div>
         </li>

         <li>
           <h1 className="details-heading">Booking Reference</h1>
           <span className="details-span">{ bookingRefNo }</span>
         </li>

         <li>
           <h1 className="details-heading">Request Type</h1>
           <span className="details-span">{reqType}</span>
         </li>

         <li>
          <h1 className="details-heading">Ticket Sales(Booking Source)</h1>
          <span className="details-span">{TicketSale}</span>
         </li>

       </ul>

       <ul className="details-list">
         <li>
           <h1 className="details-heading">Flight Date</h1>
           <span className="details-span">
              <img src={calender} alt="calender" className="w-4 h-4 mr-1.5 inline-block" />
              {flightDate}
            </span>
         </li>
         
         <li>
            <h1 className="details-heading">Ticket Class</h1>
            <span className="details-span">{ticketClass}</span>
         </li>
         <li>
           <h1 className="details-heading">Reason</h1>
           <span className="details-span">{reason}</span>
         </li>
         <li>
           <h1 className="details-heading">Route</h1>
           <span className="details-span">{route}</span>
         </li>
       </ul>

       <ul className="details-list">
        <li>
          <h1 className="details-heading">Ticket Class</h1>
          <span className="details-span">{reqId}</span>
        </li>
        <li>
          <h1 className="details-heading">Approved By</h1>
          <span className="details-span">{approvedBy}</span>
        </li>
        <li>
           <h1 className="details-heading">Ticket Type</h1>
           <span className="details-span">{ticketType}</span>
        </li>
        <li>
           <h1 className="details-heading">Approved On</h1>
           <span className="details-span">
              <img src={calender} alt="calender" className="w-4 h-4 mr-1.5 inline-block" />
              {approvedOn}
            </span>
        </li>
       </ul>
    </main>
    <hr />
    <h2 className="p-2.5">Fare Breakdown</h2>
    <hr />

    <main className="p-2.5 flex gap-[5rem]">
       <ul className="flex flex-col">
          <li>
            <h1 className="details-heading">Base Fare</h1>
            <span className="details-span">{baseFare}</span>
          </li>
           <li>
            <h1 className="details-heading">Airport</h1>
            <span className="details-span">{serviceFee}</span>
          </li>
       </ul>

       <ul className="flex flex-col">
         <li>
            <h1 className="details-heading">Tax & Govt Fees</h1>
            <span className="details-span">{taxGovtFee}</span>
          </li>
          <li>
            <h1 className="details-heading">Ancillary (Seat + Bag)</h1>
            <span className="details-span">{ancillary}</span>
          </li>
       </ul>

       <ul className="flex flex-col">
          <li>
            <h1 className="details-heading">Fuel Surcharge</h1>
            <span className="details-span">{FuelSurcharge}</span>
          </li>
            <li>
            <h1 className="details-heading">Total</h1>
            <span className="text-2xl font-bold">{total}</span>
          </li>
       </ul>

    </main>

    <div className="py-6 px-2.5 bg-blue-300 text-gray-600 m-4 rounded-lg border border-blue-500">
          <h2>Refund Amount</h2>
          <span>{refundAmount}</span>
    </div>

    <hr />
      <h2 className="p-2.5">Payment Details</h2>
    <hr />

    <ul className="flex gap-[5rem] p-2.5">
          <li>
            <h1 className="details-heading">Account Name</h1>
            <span className="details-span">{customerName}</span>
          </li>
          <li>
            <h1 className="details-heading">Bank Name</h1>
            <span className="details-span">{bankName}</span>
          </li>
          <li>
            <h1 className="details-heading">Account Number</h1>
            <span className="details-span">{accountNumber}</span>
          </li>
    </ul>

    <hr />
        <h2 className="p-2.5">Supporting Documents</h2>
    <hr />

    <div className="py-3.5 px-5 flex flex-col gap-1.5">
      <DocumentUploaded
        fileName="Medical Certificate"
        size={1.2}
        dateUploaded="Novermber 15, 2023"
      />
      <DocumentUploaded
        fileName="Medical Certificate"
        size={1.2}
        dateUploaded="Novermber 15, 2023"
      />
    </div>


  </div>
 )
}

interface DocumentProps{ 
  // uploadedFile: File
  fileName: string
  size: any;
  dateUploaded: string
}
export const DocumentUploaded = ({ fileName, size, dateUploaded }: DocumentProps) => {
  return(
    <div className="0 py-4 px-1.5 border border-gray-600 bg-gray-200 rounded-lg">
        <div className="flex gap-4">
            <img src={downloadClip} alt="clip" className="w-4.5 h-4.5"/>
          <ul>
            <li className="text-[13px] font-bold">{fileName}</li>
            <li className="flex gap-1.5 text-[10px]">
                <span>{size} MB</span>
                <span>Uploaded on {dateUploaded} </span>
            </li>
          </ul>
        </div>
    </div>
  )
}


interface ReqHistoryProps{
  reqHeading: string;
  reqMaker: string;
  reqDate: string;
  reqTime: string;
  result?: string;
}

const ReqHistory = ({
  reqHeading,
  reqMaker,
  reqDate,
  reqTime,
  result = "",
}: ReqHistoryProps) => {
  return(
    <div className="flex gap-2">
      <div className="bg-[#DBEAFE] p-1.5 rounded-[50%] h-max w-max">
        <img src={historyClock} alt="history icon" className="h-4.5 w-4.5"/>
      </div>

      <ul>
        <li className="details-heading">{reqHeading}</li>
        <li className="details-span">By: {reqMaker}</li>
        <li className="details-span">{result}</li>
        <li className="details-span">{reqDate} at {reqTime}</li>
      </ul>
    </div>
  )
}

export const RequestHistoryTable = () => {
  return(
    <div className="border border-gray-300 rounded-lg w-[27rem]">
      <h2 className="p-3.5">Request History</h2>
      <hr />

      <div className="flex flex-col gap-4 p-[1.5rem]">
          <ReqHistory 
            reqHeading="Request submitted"
            reqMaker="Customer"
            reqDate="November 15, 2025"
            reqTime="09:15AM"
          />

          <ReqHistory 
            reqHeading="Automated eligibility check"
            reqMaker="System"
            result="Result: Awaiting Review"
            reqDate="November 10, 2023"
            reqTime="10:45PM"
          />

          <ReqHistory 
            reqHeading="Request submitted"
            reqMaker="Customer"
            reqDate="November 15, 2025"
            reqTime="09:15AM"
          />

      </div>
    </div>
  )
}



export const CommunicationSection = () => {
  return(
    <div className="border border-gray-300 rounded-lg w-[27rem]">
      <h2 className="p-3.5">Communication</h2>
      <hr />

      <div className="p-4">


        <input
          type="text"
          name="input-chat"
          id=""
          className="border-none rounded-lg bg-gray-200 text-gray-700 p-2.5 w-[100%]"
          placeholder="Type a message..."
        />
      </div>

    </div>
  )
}


export const VerifyClaim = ({ 
  verifier, 
  verifiComment = "Successfully Verified",
  verifiedOn,
  approver,
 }:VerifyClaimsProps) => {
  return(
    <div className="border border-gray-300 rounded-lg w-[27rem]">
      <h2 className="p-3.5">Verification</h2>
      <hr />

      <div className="p-4 mt-4">
        <div className="flex justify-between">
          <ul className="verification-ul">
            <li>
              <h2 className="verification-h2">Verifier</h2>
              <span className="verification-span">{verifier}</span>
            </li>
            <li>
              <h2 className="verification-h2">Verification Comment</h2>
              <span className="verification-span">{verifiComment}</span>
            </li>
            <li>
              <h2 className="verification-h2">Verified On</h2>
              <span className="verification-span">{verifiedOn.dateVerified}, {verifiedOn.timeVerified}</span>
            </li>
          </ul>

          <ul className="verification-ul">
            <li>
              <h2 className="verification-h2">Approver</h2>
              <span className="verification-span">{approver}</span>
            </li>
            <li>
              <h2 className="verification-h2">Approved Comment</h2>
              <span className="verification-span">{verifiComment}</span>
            </li>
            <li>
              <h2 className="verification-h2">Approved On</h2>
              <span className="verification-span">{verifiedOn.dateApproved}, {verifiedOn.timeApproved}</span>
            </li>
          </ul>
        </div>

          <section className="flex gap-[4%] mt-20">
            <button className="verification-btn">
              <img src={cancel} alt="x" className="w-4.5 h-4.5" />
              <span className="text-red-700">Decline</span>
            </button>
            <button className="verification-btn">
              <img src={confirm} alt="check" className="w-4.5 h-4.5"/>
              <span className="text-green-600">Approve</span>
            </button>
          </section>

      </div>

    </div>
  )
}