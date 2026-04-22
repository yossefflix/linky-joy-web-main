import React from "react";

const SniplinkPayPage = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe 
        src="http://localhost:3000" 
        className="w-full h-full border-none"
        title="Sniplink Pay Integration"
        allow="payment"
      />
    </div>
  );
};

export default SniplinkPayPage;
