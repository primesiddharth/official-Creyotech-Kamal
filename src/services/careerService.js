const API_URL = import.meta.env.VITE_API_URL;

export const submitCareerForm = async (formData) => {
  const response = await fetch(`${API_URL}/career/`, {
    method: "POST",

    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to submit application.");
  }

  return data;
};
