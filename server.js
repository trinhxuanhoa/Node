import translate from "google-translate-api-x";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Chỉ hỗ trợ POST" });
  }

  const { text, target } = req.body;

  if (!text || !target) {
    return res.status(400).json({ error: "Thiếu dữ liệu cần thiết." });
  }

  try {
    const result = await translate(text, { to: target });
    res.status(200).json({ translatedText: result.text });
  } catch (error) {
    res.status(500).json({ error: "Lỗi dịch thuật." });
  }
}
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
