import data from "./data";

// api/popular
export default function handler(req, res) {
  const { popular } = data;

  if (popular) return res.status(200).json(popular);
  return res.status(404).json({ error: "Data Not Found" });
}
