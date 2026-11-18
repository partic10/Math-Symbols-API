const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample database / array of items
const band111_mathBand = [
  { id: 1, name: 'Plus', role: 'Detective' },
  { id: 2, name: 'Minus', role: 'Javelin/Hopeless' },
  { id: 3, name: 'Multiply', role: Oblivious' },
  { id: 4, name: 'Divided-by', role: 'Perfectionist' }
];

// Search endpoint: e.g., /api/search?q=mouse&category=electronics
app.get('/getRole/original', (req, res) => {
  const { q, category } = req.query;
  
  let results = band111_mathBand;

  // Filter by search query 'q' if provided
  if (q) {
    results = results.filter(band111_mathBand => 
      item.name.toLowerCase().includes(q.toLowerCase())
    );
  }

  // Filter by category if provided
  if (category) {
    results = results.filter(band111_mathBand => 
      item.category.toLowerCase() === category.toLowerCase()
    );
  }

  res.json({
    query: { q, category },
    count: results.length,
    results
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
