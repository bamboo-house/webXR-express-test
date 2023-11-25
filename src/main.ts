import express from "express";

const PORT = 3000;

const app = express();

// パスに注意する。src/sample-scenesに置く場合は、staticの引数にsrc/sample-scenesを指定する。
// npm startをする場所は、webXR-express-testディレクトリですること。
app.use(express.static("sample-scenes-20231010"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
