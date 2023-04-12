import React from "react";
import Logo from "../../assets/logoCute.png";
import headerStyles from "./header.jsx";
import { Card } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Header() {
  const styles = headerStyles();
  const nativeShare = (e) => {
    e.preventDefault();
    if (e.target.id !== "Share") {
      window.open(
        "https://web.whatsapp.com/send?phone=5436252930020&text=Hola,%20tengo%20una%20consulta",
        "_blank"
      );
    } else {
      window.open(
        "whatsapp://send?text=https://order-bits.vercel.app/",
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
          <ShareIcon sx={{ color: "#fff" }} onClick={nativeShare} id="Share" />
        </div>
        <div style={styles.headerIcons}>
          <WhatsAppIcon
            sx={{ color: "#fff" }}
            id="WhatsApp"
            onClick={nativeShare}
          />
        </div>
      </div>
    </Card>
  );
}
