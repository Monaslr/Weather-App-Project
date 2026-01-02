export default async (req) => {
  const url = new URL(req.url);
  const city = url.searchParams.get("city");

  if (!city) {
    return new Response(JSON.stringify({ error: "Missing city" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const key = process.env.SHECODES_FORECAST_KEY;
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${encodeURIComponent(
    city
  )}&key=${key}&units=metric`;

  const res = await fetch(apiUrl);
  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
};
