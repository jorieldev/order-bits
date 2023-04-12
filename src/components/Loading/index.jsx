import React from "react";
import { Skeleton } from "@mui/material";
import "./styles.css";

export default function loading() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Skeleton
        variant="rectangular"
        width="90%"
        height="60px"
        style={{
          margin: "60px 0 20px 0",
          background: "#e6d5b8",
          borderRadius: "20px",
        }}
      />
      <Skeleton
        variant="rectangular"
        width="90%"
        height="180px"
        style={{ background: "#e6d5b8", borderRadius: "20px" }}
      />
    </div>
  );
}
