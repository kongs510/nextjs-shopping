export default function (req, res) {
  res.statusCode = 200;
  res.json({ name: req.cookies.a_name });
}
