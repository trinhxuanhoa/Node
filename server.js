const express = require("express");
const cors = require("cors");
const translate = require("google-translate-api-x");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/translate", async (req, res) => {
    const { text, target } = req.body;
    if (!text || !target) {
        return res.status(400).json({ error: "Thiếu dữ liệu cần thiết." });
    }

    try {
        const result = await translate(text, { to: target });
        res.json({ translatedText: result.text });
    } catch (error) {
        res.status(500).json({ error: "Lỗi dịch thuật." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});
