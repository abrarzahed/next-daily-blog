import data from "../data";
export default function handler(req, res) {
  const { posts } = data;
  if (posts) return res.status(200).json(posts);
  return res.status(404).json({ error: "Data not found" });
}
