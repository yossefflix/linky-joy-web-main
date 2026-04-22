import React from "react";

const SniplinkPayAdminPage = () => {
  return (
    <div className="w-full h-screen overflow-hidden pt-16">
      <iframe 
        src="http://localhost:3000/admin" 
        className="w-full h-full border-none"
        title="Sniplink Pay Admin Integration"
      />
    </div>
  );
};

export default SniplinkPayAdminPage;
