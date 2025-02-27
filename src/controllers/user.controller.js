exports.hello = (req, res) => {
    res.json({ message: `Hello, ${req.user.email}!` });
  };
  