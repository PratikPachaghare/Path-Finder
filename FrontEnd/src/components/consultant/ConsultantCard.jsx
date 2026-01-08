import { useState } from "react";

export default function ConsultantCard({ consultant, user }) {
  const [bookedOption, setBookedOption] = useState(null);

  const sendEmail = async (type) => {
    try {
      await fetch("https://your-backend-api.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail: user.email,
          consultantName: consultant.name,
          meetingType: type,
          meetingPrice:
            type === "Chat & Call"
              ? consultant.chatCallPrice
              : consultant.videoMeetPrice,
        }),
      });
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleBooking = (type) => {
    setBookedOption(type);
    alert(
      `Your ${type} consultation with ${consultant.name} is booked! A confirmation email and schedule details have been sent.`
    );

    sendEmail(type); // Send confirmation email
  };

  return (
    <div
      className={`w-72 shadow-md rounded-lg overflow-hidden p-4 border border-gray-200 transition ${
        bookedOption ? "bg-green-100" : "bg-white"
      }`}
    >
      <img
        src={consultant.image}
        alt={consultant.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{consultant.name}</h3>
        <p className="text-sm text-gray-600">
          {consultant.education} - {consultant.degree}
        </p>
        <p className="text-sm text-gray-500 mt-2">{consultant.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-yellow-500 font-semibold">⭐ {consultant.rating}</span>
          <span className="text-gray-800 font-bold">₹{consultant.price}/hr</span>
        </div>

        {bookedOption ? (
          <button
            className="mt-4 w-full py-2 rounded-lg bg-green-600 text-white"
            disabled
          >
            {bookedOption} Booked
          </button>
        ) : (
          <div className="mt-4 flex flex-col gap-2">
            <button
              onClick={() => handleBooking("Chat & Call")}
              className="w-full py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              Chat & Call - ₹{consultant.chatCallPrice || 800}
            </button>
            <button
              onClick={() => handleBooking("Video Meet")}
              className="w-full py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
            >
              Video Meet - ₹{consultant.videoMeetPrice || 1500}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
