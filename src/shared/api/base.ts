export async function getCourses() {
  try {
    const res = await fetch("https://logiclike.com/docs/courses.json");

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
}
