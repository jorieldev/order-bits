import { useState, useEffect } from "react";
import api from "./api";
import "./App.css";
import { Card, CardContent, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Header from "./components/Header";
import CardFlotant from "./components/CardFlotant";
import Loading from "./components/Loading";

function App() {
  const [order, setOrder] = useState("");
  const [inf, setInf] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [colorPhase, setColorPhase] = useState({ color: "#e6d5b8" });
  const regex = new RegExp("^[0-9]{0,5}$");
  useEffect(() => {
    if (inf) {
      setLoading(false);
    }
  }, [inf]);

  useEffect(async () => {
    const themeColor = window?.matchMedia(
      "(prefers-color-scheme: dark)"
    )?.matches;
    setColorPhase({
      color: themeColor ? "#e6d5b8" : "rgb(190 159 105)",
    });
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    setError(false);
    const isValid = regex.test(order) && order !== "";
    if (isValid) {
      const ordersOne = await api.orders.fetch(order);
      await api.statics.postOrders(order);
      setInf(ordersOne !== undefined ? ordersOne : { Tematica: "ERROR" });
      const dashboard = await api.getDashboard.fetch();
      console.log("dashboard", dashboard);
    } else {
      setError(true);
      setInf({ Tematica: "ERROR" });
    }
  };

  const handleBack = () => {
    setLoading(true);
    setInf();
    setOrder("");
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Card style={{ background: "none", boxShadow: "none" }}>
      <Header />
      <Card style={{ background: "none", boxShadow: "none", height: "50vh" }}>
        {loading ? (
          <Loading />
        ) : (
          <>
            {!inf || error ? (
              <>
                <h2 style={{ ...colorPhase, padding: "20px 20px 0" }}>
                  ¿Querés saber cómo va tu pedido?
                </h2>
                <CardContent
                  sx={{ flex: "1 0 auto" }}
                  style={{ paddingBottom: "50px" }}
                >
                  <input
                    name="order"
                    autoComplete="off"
                    inputMode="numeric"
                    min="1"
                    max="99999"
                    maxLength={5}
                    onChange={(event) => {
                      const inputValue = event.target.value
                        .replace(/-/g, "")
                        .replace(/[a-zA-Z]+/g, "")
                        .replace(/[\^*@!"#$%&/()=?¡!¿;:><,|}{'_.\\]/gi, "");
                      const isValid =
                        inputValue !== "" && regex.test(inputValue);
                      const blankValid =
                        order?.length > 1 && inputValue.length < 0;
                      isValid
                        ? setOrder(inputValue)
                        : blankValid
                        ? setOrder(order)
                        : setOrder("");
                    }}
                    value={order}
                  />
                </CardContent>
                {error && (
                  <span
                    style={{
                      display: "flex",
                      marginTop: "-20px",
                      paddingBottom: "-20px",
                      color: "#bbe1c4",
                      justifyContent: "center",
                    }}
                  >
                    "Ups, no encontre la orden, intentalo de vuelta"
                  </span>
                )}
                <Button
                  variant="contained"
                  endIcon={<SearchIcon />}
                  onClick={handleSubmit}
                >
                  Buscar por número de orden
                </Button>
              </>
            ) : inf.Tematica !== "ERROR" ? (
              <CardFlotant inf={inf} handleBack={handleBack} />
            ) : (
              setError(true)
            )}
          </>
        )}
        <a
          href="https://cafecito.app/jorieldev"
          rel="noopener"
          target="_blank"
          className="footer"
        >
          Joriel ©
        </a>
      </Card>
    </Card>
  );
}

export default App;
