import Papa from "papaparse";

const api = {
  orders: {
    fetch: async () => {
      const resp = await fetch(import.meta.env.VITE_EXCEL_KEY);
      const data = await resp.text();
      const parsed = await new Promise((resolve, reject) => {
        Papa.parse(data, {
          header: true,
          complete: (result) => resolve(result.data),
          error: reject,
        });
      });

      return parsed?.map((value) => {
        const obj = {
          Cantidad: value.Cantidad,
          Finalizado: value.Finalizado,
          LlaverosImanesCentros: value.LlaverosImanesCentros,
          FechaEntrega: value.FechaEntrega,
          Total: value.Total,
          Seña: value.Seña,
          Orden: value.Orden,
          Tematica: value.Tematica,
          Envio: value.Envio,
        };
        return obj;
      });
    },
  },
};

export default api;
