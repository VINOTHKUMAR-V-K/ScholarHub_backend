// routes/imageRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const Image = require('../model/file');

// Multer configuration for handling file uploads
const upload = multer();

// POST endpoint for uploading an image
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // Create a new image document
    const newImage = new Image({
      imageData: req.file.buffer // req.file.buffer contains the binary data of the uploaded image
    });

    // Save the image to the database
    await newImage.save();

    res.status(201).send('Image uploaded successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading image');
  }
});

module.exports = router;
