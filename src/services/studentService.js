const API_URL = import.meta.env.VITE_API_URL;

export const fetchAllStudents = async () => {
  const response = await fetch(`${API_URL}/students/`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Failed to load directory.");
  return data.data;
};

export const fetchStudentBySlug = async (slug, token) => {
  const response = await fetch(`${API_URL}/students/${slug}?token=${encodeURIComponent(token || "")}`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Not found.");
  return data.data;
};

export const imageUrl = (path) => (path?.startsWith("http") ? path : `${API_URL}${path}`);