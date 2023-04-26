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
    Haciendo,
  } = inf;
  return (
    <>
      <CardContent sx={{ flex: "1 0 auto" }} style={{ paddingBottom: "50px" }}>
        <h2 style={{ color: "#e6d5b8", padding: "40px 20px 10" }}>
          {`${Cantidad} ${LlaverosImanesCentros} de ${Tematica}`}
        </h2>
        <Typography variant="h6" component="h6" style={{ color: "#e6d5b8" }}>
          {Haciendo} con una fecha estimada {FechaEntrega}
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
            {Horario && Finalizado === "SI"
              ? `Se podra retirar en el horario de ${Horario}.`
              : Envio.toLowerCase() !== "no"
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
