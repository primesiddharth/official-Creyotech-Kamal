const API_URL = import.meta.env.VITE_API_URL;

async function handle(response) {
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Something went wrong.");
  return data;
}

export const fetchPartners = (type) =>
  fetch(`${API_URL}/partners/${type}`, { credentials: "include" }).then(handle);

export const createPartner = (type, payload) =>
  fetch(`${API_URL}/partners/${type}`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then(handle);

export const deletePartner = (type, id) =>
  fetch(`${API_URL}/partners/${type}/${id}`, {
    method: "DELETE",
    credentials: "include",
  }).then(handle);