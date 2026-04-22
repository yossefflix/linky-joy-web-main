import React from "react";

const SniplinkPayAdminPage = () => {
  const isDev = import.meta.env.DEV;
  const baseUrl = import.meta.env.VITE_SNIPLINK_PAY_URL || (isDev ? "http://localhost:3000" : "https://ضع-رابط-المشروع-الصغير-هنا.vercel.app");

  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe 
        src={`${baseUrl}/admin`} 
        className="w-full h-full border-none"
        title="Sniplink Pay Admin Integration"
      />
    </div>
  );
};

export default SniplinkPayAdminPage;
