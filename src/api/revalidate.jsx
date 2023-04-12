export default async function handler(_req, res) {
  await res.revalidate("/");
  return res.json({ revalidated: true });
}
