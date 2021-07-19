export default function (req, res) {
  res.status(200).json({ id: req.query.id });
}
