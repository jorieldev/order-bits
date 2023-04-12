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

  useEffect(() => {
    if (inf) {
      setLoading(false);
    }
  }, [inf]);

  const handleSubmit = async () => {
    setLoading(true);
    setError(false);
    const ordersAll = await api.orders.fetch();
    setInf(
      (await ordersAll?.filter((o) => o.Orden === order)[0]) ?? {
        Tematica: "No existe este pedido",
      }
    );
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
                <h2 style={{ color: "#e6d5b8", padding: "20px 20px 0" }}>
                  ¿Querés saber cómo va tu pedido?
                </h2>
                <CardContent
                  sx={{ flex: "1 0 auto" }}
                  style={{ paddingBottom: "50px" }}
                >
                  <input
                    type="number"
                    name="order"
                    pattern="[0-9]+"
                    maxLength="5"
                    onChange={(event) =>
                      setOrder(() =>
                        event.target.value?.match(/[1-9]/g)?.join("")
                      )
                    }
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
            ) : inf.Tematica !== "No existe este pedido" ? (
              <CardFlotant inf={inf} handleBack={handleBack} />
            ) : (
              setError(true)
            )}
          </>
        )}
      </Card>
    </Card>
  );
}

export default App;
