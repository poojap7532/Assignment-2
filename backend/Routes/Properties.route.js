const Property = require('../models/Property');
const router = express.Router();

// Create a property
router.post('/', async (req, res) => {
    const property = new Property(req.body);
    try {
        await property.save();
        res.status(201).json(property);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all properties
router.get('/', async (req, res) => {
    const properties = await Property.find();
    res.json(properties);
});

// Get a specific property
router.get('/:id', async (req, res) => {
    const property = await Property.findById(req.params.id);
    res.json(property);
});

// Update a property by ID
router.put('/:id', async (req, res) => {
    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json(property);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a property by ID
router.delete('/:id', async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json({ message: 'Property deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
