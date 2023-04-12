import React from "react";
import Logo from "../../assets/logoCute.png";
import headerStyles from "./header.jsx";
import { Card, CardContent, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Header() {
  const styles = headerStyles();
  const nativeShare = (e) => {
    e.preventDefault();
    if (e.target.tagName === "svg") {
      window.open("https://api.whatsapp.com/send?phone=3625293002", "_blank");
    } else {
      window.open(
        "whatsapp://send?text=https://api.whatsapp.com/send?phone=3625293002",
        "_blank"
      );
    }
  };
  return (
    <Card style={styles.headerContainer}>
      <div style={styles.headerCircle} />
      <Card style={styles.headerContainerImg}>
        <img src={Logo} style={styles.headerImg} />
      </Card>
      <div style={styles.headerIconsContainer}>
        <div style={styles.headerIcons}>
          <ShareIcon sx={{ color: "#fff" }} onClick={nativeShare} />
        </div>
        <div style={styles.headerIcons}>
          <WhatsAppIcon sx={{ color: "#fff" }} onClick={nativeShare} />
        </div>
      </div>
    </Card>
  );
}
