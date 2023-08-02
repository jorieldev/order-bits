const api = {
  orders: {
    fetch: async (order) => {
      const resp = await fetch(`${import.meta.env.VITE_API_KEY}${order}`);
      const data = await resp.text();
      return JSON.parse(data)[0];
    },
  },
  statics: {
    postOrders: async (order) => {
      const formData = new FormData();
      const today = new Date();
      const now = today.toLocaleDateString("en-US");
      formData.append("Id", `${order}-${now}`);
      fetch(import.meta.env.VITE_STATICS_KEY, {
        method: "POST",
        body: formData,
      })
        .then(console.log(formData))
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getDashboard: {
    fetch: async () => {
      const resp = await fetch(
        `${import.meta.env.VITE_API_DASHBOARD_KEY}${order}`
      );
      const data = await resp.text();
      return JSON.parse(data);
    },
  },
};

export default api;
