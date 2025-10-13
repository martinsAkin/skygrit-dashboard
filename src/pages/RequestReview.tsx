import { CommunicationSection, RequestDetailsTable, RequestHistoryTable, ReviewHeading, VerifyClaim } from "../components/ReviewRequestComponents"
import { NavLink } from "react-router-dom"

const RequestReview = () => {
  return (
    <div className="ml-1.5">

      <div className="flex justify-between my-2.5">
        <ReviewHeading
          reqNo={1001}
          reqDate="November 15, 2023"
        />

        <button className='bg-blue-950 text-white rounded-md px-3.5 py-0 text-sm cursor-pointer'>
            <NavLink to="/requests/dashboard">
                --back
            </NavLink>
        </button>
      </div>

      <div className="flex gap-6">
        <RequestDetailsTable
         customerName="John Smith"
         customerEmail="johnsmith@example.com"
         bookingRefNo="AC48721"
         reqType="Refund"
         TicketSale={"Direct from airline"}
         flightDate={"December 10, 2023"}
         ticketClass="Yanky"
         reason={"No Show"}
         route="Domestic"
         reqId={"REQ -10001"}
         approvedBy="System"
         ticketType="Individual"
         approvedOn={"December 20, 2023"}
         baseFare={200000}
         taxGovtFee={10000}
         FuelSurcharge={5000}
         serviceFee={1000}
         ancillary={0}
         total={216000}
         refundAmount={"-"}
         bankName="Kuda MFB"
         accountNumber={"011****445"}
        />

        <div className="flex flex-col gap-4">
          <RequestHistoryTable />
          <CommunicationSection />
          <VerifyClaim 
            verifier="Isaiah Victoria"
            approver="-"
            verifiedOn={{
              dateVerified: "23/05/2022",
              timeVerified: "05:18:45",
              dateApproved: "23/05/2022",
              timeApproved: "05:18:45",
            }}

          />
        </div>
      </div>
    </div>
  )
}

export default RequestReview