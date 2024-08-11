const urls = require("../data/urls-data");
const uses = require("../data/uses-data");

// list urls 
function list(req, res) {
  res.json({ data: urls });
}

// create short url 
function create(req, res, next) {
  const { data: { href } = {} } = req.body;
  if (href) {
    const id = urls.length + 1; // Incremental ID based on array length
    const newUrl = { id, href };
    urls.push(newUrl);
    res.status(201).json({ data: newUrl });
  } else {
    next({ status: 400, message: "The 'href' field is required" });
  }
}

// read a url by urlId
function read(req, res, next) {
  const { urlId } = req.params;
  const url = urls.find((u) => u.id === parseInt(urlId, 10));
  if (url) {
    // Log the use of this URL
    const useId = uses.length + 1; // Incremental ID based on array length
    const newUse = { id: useId, urlId: url.id, time: Date.now() };
    uses.push(newUse);
    res.json({ data: url });
  } else {
    next({ status: 404, message: `URL ID not found: ${urlId}` });
  }
}

// update a url by urlId 
function update(req, res, next) {
  const { urlId } = req.params;
  const { data: { href } = {} } = req.body;
  const url = urls.find((u) => u.id === parseInt(urlId, 10));
  if (url) {
    if (href) {
      url.href = href;
      res.json({ data: url });
    } else {
      next({ status: 400, message: "The 'href' field is required for updating the URL." });
    }
  } else {
    next({ status: 404, message: `URL ID not found: ${urlId}` });
  }
}

// delete a URL by ID
function destroy(req, res, next) {
  const { urlId } = req.params;
  const index = urls.findIndex((u) => u.id === parseInt(urlId, 10));
  if (index !== -1) {
    urls.splice(index, 1); // Remove the URL
    res.sendStatus(204); // No content
  } else {
    next({ status: 404, message: `URL ID not found: ${urlId}` });
  }
}

// list # of uses for a specific :urlId
function listUses(req, res, next) {
  const { urlId } = req.params;
  const url = urls.find((u) => u.id === parseInt(urlId, 10));
  if (url) {
    const filteredUses = uses.filter((use) => use.urlId === parseInt(urlId, 10));
    res.json({ data: filteredUses });
  } else {
    next({ status: 404, message: `URL ID ${urlId} not found` });
  }
}

// read a use for a specific :urlId 
function readUse(req, res, next) {
  const { urlId, useId } = req.params;
  const use = uses.find((u) => u.id === parseInt(useId, 10) && u.urlId === parseInt(urlId, 10));
  if (use) {
    res.json({ data: use });
  } else {
    next({ status: 404, message: `Use ID ${useId} not found for URL ID: ${urlId}` });
  }
}


module.exports = {
  list,
  create,
  read,
  update,
  delete: destroy, // Make sure this is correctly mapped
  listUses,
  readUse,
};

