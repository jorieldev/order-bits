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
      formData.append("Id", order);
      fetch(import.meta.env.VITE_STATICS_KEY, {
        method: "POST",
        body: formData,
      })
        .then()
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

export default api;
