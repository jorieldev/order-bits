import { CardContent, Typography, Button } from "@mui/material";

const CardFlotant = ({ inf, handleBack }) => {
  const {
    Cantidad,
    LlaverosImanesCentros,
    FechaEntrega,
    Seña,
    Total,
    Tematica,
    Finalizado,
    Envio,
    Horario,
  } = inf;
  return (
    <>
      <CardContent sx={{ flex: "1 0 auto" }} style={{ paddingBottom: "50px" }}>
        <h2 style={{ color: "#e6d5b8", padding: "40px 20px 10" }}>
          {Tematica}
        </h2>
        <Typography variant="h6" component="h6" style={{ color: "#e6d5b8" }}>
          {Finalizado === "NO"
            ? `Se estan creando ${Cantidad} ${LlaverosImanesCentros} con una fecha estimada de entrega ${FechaEntrega}`
            : `Estan creados ${Cantidad}  ${LlaverosImanesCentros}, se termino el día ${FechaEntrega}`}
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          style={{ color: "#e6d5b8", marginBottom: "50px" }}
        >
          {parseInt(Total) - parseInt(Seña) === 0
            ? "Pedido pago"
            : `Su saldo a pagar es: $${parseInt(Total) - parseInt(Seña)}`}
        </Typography>
        {(Envio || Horario) && (
          <Typography
            variant="h6"
            component="h6"
            style={{ color: "#e6d5b8", marginBottom: "10px" }}
          >
            {" "}
            {Horario
              ? `Se podra retirar en el horario de ${Horario}.`
              : Envio
              ? "Cuenta con envio"
              : ""}
          </Typography>
        )}
        <Button variant="contained" onClick={handleBack}>
          ¿Tenes otro pedido?
        </Button>
      </CardContent>
    </>
  );
};

export default CardFlotant;
