const multer = require('multer');
const Pet = require('../models/Pet'); // Assuming you have a Pet model
const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Post a new pet
router.post('/', upload.single('file'), async (req, res) => {
  const { name, age, description } = req.body;
  const newPet = new Pet({
    name,
    age,
    description,
    imageUrl: `/uploads/${req.file.filename}`
  });
  await newPet.save();
  res.status(201).json(newPet);
});

module.exports = router;
