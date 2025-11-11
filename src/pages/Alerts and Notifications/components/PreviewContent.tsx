// import React from 'react'
interface PreviewContentProps {
  subject?: string;
  message?: string;
}
const PreviewContent = ({
  subject = "Your booking is confirmed - ABC123",
  message = "Dear John Smith, Thank you for choosing Skygrit Airlines! Your booking has been confirmed. Booking Details: PNR: ABC123 Flight: SG456 Departure: June 15, 2024, 10:00 AM We look forward to serving you on board. Safe travels! Best regards,Skygrit Airlines",
}: PreviewContentProps) => {
  return (
    <div className="p-4">
      {/* Preview Layout */}
      <div>
        {/* Email Preview Section */}
        <div className="mb-6">
          <h2 className="text-xl mb-4">Email Preview</h2>
          <div className="border border-gray-300 rounded-lg">
            <div className="p-4 bg-gray-100">
              <h3 className="text-xl">Subject: {subject}</h3>
            </div>
            <span className="p-4 block">
              <p className="text-lg">{message}</p>
            </span>
          </div>
        </div>
        {/* SMS Preview Section */}
        <div className="max-w-xl">
          <h2 className="text-xl mb-4">SMS Preview</h2>
          <div className="p-6 border border-gray-300 rounded-lg">
            <span className="p-4 block bg-[#DBEAFE] rounded-lg mb-3">
              <p className="text-lg">
                Booking confirmed! PNR: ABC123, Flight: SK401, Dec 15, 2023 at{" "}
                <br />
                10:30 AM. Check in at <br />
                skygrit.com/checkin
              </p>
            </span>
            <p className="text-lg text-gray-600">160 Characters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewContent;
