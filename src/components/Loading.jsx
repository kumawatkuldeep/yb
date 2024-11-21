import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="loading-screen">
      
      <InfinitySpin
        visible={true}
        width="200"
        color="black"
        ariaLabel="infinity-spin-loading"
      />
      
      <h1
        style={{
          fontSize: "25px",
          marginTop: "10px",
        }}
      >
        Hang tight, we're almost there!
      </h1>
    </div>
  );
};

export default Loading;
