const API_URL = import.meta.env.VITE_API_URL;

async function handle(response) {
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Something went wrong.");
  return data;
}

export const fetchStudentsForManager = () =>
  fetch(`${API_URL}/manager/students`, { credentials: "include" }).then(handle);

export const createStudent = (formData) =>
  fetch(`${API_URL}/manager/students`, {
    method: "POST",
    credentials: "include",
    body: formData,
  }).then(handle);

export const updateStudent = (id, formData) =>
  fetch(`${API_URL}/manager/students/${id}`, {
    method: "PUT",
    credentials: "include",
    body: formData,
  }).then(handle);

export const deleteStudent = (id) =>
  fetch(`${API_URL}/manager/students/${id}`, {
    method: "DELETE",
    credentials: "include",
  }).then(handle);

export const regenerateAccess = (id) =>
  fetch(`${API_URL}/manager/students/${id}/regenerate`, {
    method: "POST",
    credentials: "include",
  }).then(handle);