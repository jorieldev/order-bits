function headerStyles() {
  const headerContainer = {
    background: "none",
    boxShadow: "none",
    height: "50vh",
  };

  const headerContainerImg = {
    display: "flex",
    background:
      "linear-gradient(0deg, rgba(230,213,184,1) 0%, rgba(230,213,184,0) 100%)",
    height: "50vh",
    borderRadius: "0 0px 300px",
    alignItems: "flex-end",
  };

  const headerImg = {
    width: "50vh",
    marginLeft: "-4rem",
    zIndex: "2",
  };

  const headerCircle = {
    borderRadius: "100%",
    width: "200px",
    height: "200px",
    display: "flex",
    position: "absolute",
    left: "-30px",
    top: "-90px",
    background:
      "linear-gradient(0deg, rgba(230,213,184,0) 0%, rgba(230,213,184,1) 100%)",
    zIndex: "0",
  };

  const headerIconsContainer = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    right: "60px",
    top: "40px",
    gap: "40px",
  };

  const headerIcons = {
    width: "55px",
    height: "55px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "99",
  };

  return {
    headerContainer,
    headerContainerImg,
    headerImg,
    headerCircle,
    headerIconsContainer,
    headerIcons,
  };
}

export default headerStyles;
