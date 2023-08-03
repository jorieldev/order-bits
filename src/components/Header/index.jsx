import React from "react";
const { useEffect, useState } = React;
import api from "../../api";
import Logo from "../../assets/logoCute.png";
import headerStyles from "./header.jsx";
import { Card } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Header() {
  const styles = headerStyles();
  const [dataDashboard, setDataDashboard] = useState();
  const [colorIcons, setColorIcons] = useState({ color: "#fff" });
  useEffect(() => {
    const theme = window?.matchMedia("(prefers-color-scheme: dark)")?.matches;
    setColorIcons({
      color: theme ? "#fff" : "#000",
    });
    async function fetchData() {
      try {
        const dashboard = await api.getDashboard.fetch();
        dashboard.Year = "2022-2023";
        setDataDashboard(dashboard);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);
  const nativeShare = (e) => {
    e.preventDefault();
    if (e.target.id !== "Share") {
      window.open(
        "https://api.whatsapp.com/send?phone=543625293002&text=Hola,%20Bit!",
        "_blank"
      );
    } else {
      window.open(
        "whatsapp://send?text=https://tupedido-bit.vercel.app/",
        "_blank"
      );
    }
  };
  return (
    <Card style={styles.headerContainer}>
      <div style={styles.headerCircle} className="circle" />
      <Card style={styles.headerContainerImg}>
        <img src={Logo} style={styles.headerImg} />
        {dataDashboard && (
          <div style={styles.headerDashboard}>
            <div style={styles.headerDashboardText}>
              +{dataDashboard.Process} pedidos en proceso 🕟
            </div>
            <div>
              +{dataDashboard.Done} pedidos terminados en {dataDashboard.Year}{" "}
              🤩
            </div>
          </div>
        )}
      </Card>
      <div style={styles.headerIconsContainer} className="shares">
        <div style={styles.headerIcons}>
          <ShareIcon sx={colorIcons} onClick={nativeShare} id="Share" />
        </div>
        <div style={styles.headerIcons}>
          <WhatsAppIcon sx={colorIcons} id="WhatsApp" onClick={nativeShare} />
        </div>
      </div>
    </Card>
  );
}
