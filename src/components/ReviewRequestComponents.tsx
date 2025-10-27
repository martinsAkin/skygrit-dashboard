/* eslint-disable @typescript-eslint/no-explicit-any */
import type { VerifyClaimsProps } from "../interface";
import historyClock from "/assets/Icons/historyIcon.png";
import cancel from "/assets/Icons/x.png";
import confirm from "/assets/Icons/check.png";
import downloadClip from "/assets/Icons/clip.png";
import calender from "/assets/Icons/calender.png";
// import send from "/assets/Icons/send.png"
import user from "/assets/Icons/user.png";

interface ReviewHeadingProps {
  reqNo: string | undefined;
  // reqDate should be a  date, to review later
  reqDate: string;
}

export const ReviewHeading = ({ reqNo, reqDate }: ReviewHeadingProps) => {
  return (
    <div className="py-2 px-14">
      <h1 className="text-[24px] font-semibold inline-block bg-gold-400">
        Review Request {reqNo}
      </h1>
      <span className="text-[#727372] block text-[13px]">
        Submitted on {reqDate}
      </span>
    </div>
  );
};

interface CustomerDetailsProps {
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
  baseFare: any;
  taxGovtFee: any;
  FuelSurcharge: any;
  serviceFee: any;
  ancillary: any;
  total: any;
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
  accountNumber,
}: CustomerDetailsProps) => {
  return (
    <section className="py-2 px-16 w-full">
      <div className="flex flex-1 flex-col border border-gray-300 rounded-lg">
        <header className="flex justify-between px-3.5 py-4">
          <div className="text-[14px] text-[#111827] font-semibold">
            Request Details
          </div>
          <div className="flex items-center gap-2 bg-gray-300 px-3 py-1.5 rounded-2xl text-[12px]">
            <span className="bg-[#FE8F31] w-[8px] h-[8px] rounded-full">
              {""}
            </span>
            <p className="text-[#374151] text-[12px] font-medium">Pending</p>
          </div>
        </header>
        <hr />

        <main className="p-4 flex justify-between gap-2.5">
          <ul className="details-list">
            <li>
              <h1 className="details-heading">Customer</h1>
              <div className="flex items-center gap-2">
                <div className="bg-[#DBEAFE] p-1.5 rounded-[50%] h-max w-max">
                  <img src={user} alt="p" className="w-[26px] h-[26px]" />
                </div>
                <div>
                  <li className="details-span">{customerName}</li>
                  <li className="text-[11px] text-[#6B7280]">
                    {customerEmail}
                  </li>
                </div>
              </div>
            </li>

            <li>
              <h1 className="details-heading">Booking Reference</h1>
              <span className="details-span">{bookingRefNo}</span>
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
                <img
                  src={calender}
                  alt="calender"
                  className="w-4 h-4 mr-1.5 inline-block"
                />
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
                <img
                  src={calender}
                  alt="calender"
                  className="w-4 h-4 mr-1.5 inline-block"
                />
                {approvedOn}
              </span>
            </li>
          </ul>
        </main>
        <hr />
        <h2 className="p-2.5 text-xl text-[#111827] font-medium">
          Fare Breakdown
        </h2>
        <hr />

        <main className="p-6 flex">
          <ul className="details-list">
            <li>
              <h1 className="details-heading">Base Fare</h1>
              <span className="details-span">N{baseFare}</span>
            </li>
            <li>
              <h1 className="details-heading">Airport</h1>
              <span className="details-span">{serviceFee}</span>
            </li>
          </ul>

          <ul className="details-list">
            <li>
              <h1 className="details-heading">Tax & Govt Fees</h1>
              <span className="details-span">{taxGovtFee}</span>
            </li>
            <li>
              <h1 className="details-heading">Ancillary (Seat + Bag)</h1>
              <span className="details-span">{ancillary}</span>
            </li>
          </ul>

          <ul className="details-list">
            <li>
              <h1 className="details-heading">Fuel Surcharge</h1>
              <span className="details-span">{FuelSurcharge}</span>
            </li>
            <li>
              <h1 className="details-heading">Total</h1>
              <span className="text-2xl font-bold">N{total}</span>
            </li>
          </ul>
        </main>

        <div className="py-6 px-2.5 bg-[#EFF6FF] text-gray-600 m-4 rounded-lg border border-[#DBEAFE]">
          <h2 className="text-xl text-[#6B7280] font-medium">Refund Amount</h2>
          <span className="text-[#111827] text-2xl font-semibold">
            {refundAmount}
          </span>
        </div>
        <div className="py-6 px-2.5 bg-blue-200 text-gray-600 m-4 rounded-lg border border-blue-200">
          <h2>Refund Amount</h2>
          <span>{refundAmount}</span>
        </div>

        <hr />
        <h2 className="p-2.5 text-xl text-[#111827] font-medium">
          Payment Details
        </h2>
        <hr />

        <ul className="flex px-9 py-4">
          <li className="flex-1">
            <h1 className="details-heading">Account Name</h1>
            <span className="details-span">{customerName}</span>
          </li>
          <li className="flex-1">
            <h1 className="details-heading">Bank Name</h1>
            <span className="details-span">{bankName}</span>
          </li>
          <li className="flex-1">
            <h1 className="details-heading">Account Number</h1>
            <span className="details-span">{accountNumber}</span>
          </li>
        </ul>

        <hr />
        <h2 className="p-2.5 text-xl text-[#111827] font-medium">
          Supporting Documents
        </h2>
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
    </section>
  );
};

interface DocumentProps {
  fileName: string;
  size: any;
  dateUploaded: string;
}

export const DocumentUploaded = ({
  fileName,
  size,
  dateUploaded,
}: DocumentProps) => {
  return (
    <div className="flex flex-row justify-between items-center py-4 px-1.5 border border-[#E5E7EB] bg-[#F9FAFB] rounded-lg">
      <div className="flex gap-4">
        <img src={downloadClip} alt="clip" className="w-4.5 h-4.5" />
        <ul>
          <li className="text-[13px] text-[#111827] font-bold">{fileName}</li>
          <li className="flex gap-1.5 text-[10px] text-[#6B7280]">
            <span>{size} MB</span>
            <span>Uploaded on {dateUploaded}</span>
          </li>
        </ul>
      </div>
      <span className="text-[#2563EB]">
        <a href="">View</a>
      </span>
    </div>
  );
};

interface ReqHistoryProps {
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
  return (
    <div className=" flex gap-2">
      <div className="bg-[#DBEAFE] p-1.5 rounded-[50%] h-max w-max">
        <img src={historyClock} alt="history icon" className="w-[20px]" />
      </div>

      <ul>
        <li className="text-[12px] text-[#111827] font-medium">{reqHeading}</li>
        <li className="text-[11px] text-[#6B7280]">By: {reqMaker}</li>
        <li className="text-[11px] text-[#E62E2E]">{result}</li>
        <li className="text-[11px] text-[#6B7280]">
          {reqDate} at {reqTime}
        </li>
      </ul>
    </div>
  );
};

export const RequestHistoryTable = () => {
  return (
    <div className="border border-gray-300 rounded-lg w-[460px] mt-2">
      <h2 className="p-4 text-bold text-[#111827] font-medium">
        Request History
      </h2>
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
  );
};

export const CommunicationSection = () => {
  return (
    <div className="border border-gray-300 rounded-lg w-[460px]">
      <h2 className="p-3.5">Communication</h2>
      <hr className="border-gray-200" />

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
  );
};

export const VerifyClaim = ({
  verifier,
  verifiComment = "Successfully Verified",
  verifiedOn,
  approver,
}: VerifyClaimsProps) => {
  return (
    <div className="border border-gray-300 rounded-lg w-[460px]">
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
              <span className="verification-span">
                {verifiedOn.dateVerified}, {verifiedOn.timeVerified}
              </span>
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
              <span className="verification-span">
                {verifiedOn.dateApproved}, {verifiedOn.timeApproved}
              </span>
            </li>
          </ul>
        </div>

        <section className="flex gap-[4%] mt-20">
          <button className="verification-btn">
            <img src={cancel} alt="x" className="w-4.5 h-4.5" />
            <span className="text-red-700">Decline</span>
          </button>
          <button className="verification-btn">
            <img src={confirm} alt="check" className="w-4.5 h-4.5" />
            <span className="text-green-600">Approve</span>
          </button>
        </section>
      </div>
    </div>
  );
};
