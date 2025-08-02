const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// GET /items - search and list items
router.get('/', async (req, res) => {
  try {
    const { type, category, status, tags, search } = req.query;
    const filter = {};

    if (type) filter.type = type;
    if (category) filter.category = category;
    if (status) filter.status = status;
    if (tags) filter.tags = { $in: tags.split(',') };
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } }
      ];
    }

    const items = await Item.find(filter).populate('postedBy', 'name email');
    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /items - create new lost/found item
router.post('/', async (req, res) => {
  try {
    const itemData = req.body;
    const newItem = new Item(itemData);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// PATCH /items/:id/status - update item status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const item = await Item.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (error) {
    console.error('Error updating item status:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
