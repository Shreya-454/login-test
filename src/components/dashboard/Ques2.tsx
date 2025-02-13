"use client";
import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";

const CustomCalendlyInput = () => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  const handleDateSelection = () => {
    const mockDate = new Date().toLocaleString();
    setSelectedDate(mockDate);
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <label className="mb-2 text-gray-700">Select a Date:</label>
      <input
        type="text"
        value={selectedDate}
        placeholder="Click to schedule"
        readOnly
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        onClick={() => setShowPopup(true)}
      />

      {showPopup && rootElement && (
        <PopupModal
          url="https://calendly.com/bshreya932/30min?back=1&month=2025-02"
          rootElement={rootElement}
          onModalClose={handleDateSelection} 
          open={showPopup}
        />
      )}
    </div>
  );
};

export default CustomCalendlyInput;
