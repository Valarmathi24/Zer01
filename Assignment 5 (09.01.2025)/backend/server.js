app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    res.json({ success: true, message: 'Signup successful' });
  });
  