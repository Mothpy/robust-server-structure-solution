function methodNotAllowed(req, res, next) {
  res.status(405).send({ error: `${req.method} not allowed` });
}

module.exports = methodNotAllowed;
