const apiUrl = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");

export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${apiUrl}/api/health`);
    return response.ok;
  } catch {
    return false;
  }
}
