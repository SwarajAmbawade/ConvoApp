const express = require('express')
const multer  = require('multer')
const cors = require('cors');
const docTopdf = require('docx-pdf');
const path = require('path')

const app = express()
const port = 3000

app.use(cors());

// multer for handling file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

app.post('/convertFile', upload.single('file'), (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }
    // defining output path
    let outputPath = path.join(__dirname,"files",`${req.file.originalname}.pdf`)

    const fs = require("fs");

docTopdf(req.file.path, outputPath, (err, result) => {
  if (err) {
    console.log("Conversion error:", err);
    return res.status(500).json({
      message: "Error converting docs to pdf.",
    });
  }

  const stats = fs.statSync(outputPath);
  console.log("Generated PDF size:", stats.size);

  res.download(outputPath, () => {
    console.log("file downloaded!");
  });
});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    })
  }

})

app.listen(port, () => {
  console.log(`yo app listening on port ${port}`)
})
