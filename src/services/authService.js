const API_URL = import.meta.env.VITE_API_URL;

export const managerLogin = async (password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Login failed.");
  return data;
};

export const managerLogout = async () => {
  await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
};