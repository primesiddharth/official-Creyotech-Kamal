const API_URL = import.meta.env.VITE_API_URL;

export const submitContactForm = async (formData) => {
  const response = await fetch(`${API_URL}/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data.detail === "string"
        ? data.detail
        : "Failed to submit contact form.",
    );
  }

  return data;
};
