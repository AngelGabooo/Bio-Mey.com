export default async function handler(req, res) {
  const response = await fetch(
    `https://vercel.com/api/analytics/...?projectId=${process.env.VERCEL_PROJECT_ID}`,
    { headers: { Authorization: `Bearer ${process.env.VERCEL_TOKEN}` } }
  );
  const data = await response.json();
  res.status(200).json(data);
}