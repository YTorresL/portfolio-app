export const sendContactFrorm = async (data) => {
  fetch("/api/contact/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
}
