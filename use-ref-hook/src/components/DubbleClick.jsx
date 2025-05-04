import React, { useRef } from "react";

function DubbleClick() {
  const isSubmitting = useRef(false); // Keeps track of ongoing submission

  const handleSubmit = async () => {
    if (isSubmitting.current) return; // Prevent multiple clicks

    isSubmitting.current = true; // Lock
    try {
      console.log("Submitting data...");
      await new Promise(res => setTimeout(res, 2000)); // Simulated API call
      console.log("Data submitted successfully!");
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      isSubmitting.current = false; // Unlock
    }
  };

  return (
    <div>
      <h2>Submit Your Form</h2>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}


export default DubbleClick;