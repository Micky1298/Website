"use client";

import Lottie from "lottie-react";
import data3 from "../../public/data.json";

export default function SimpleLottiePreview() {
  return (
    <div className="w-64 h-64">
      <Lottie animationData={data3} loop autoplay />
    </div>
  );
}
