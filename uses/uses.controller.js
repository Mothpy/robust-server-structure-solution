const uses = require("../data/uses-data");

// list all use metrics
function list(req, res) {
  res.json({ data: uses });
}

// retrieve a specific use metric by ID
function read(req, res, next) {
  const { useId } = req.params;
  const use = uses.find((u) => u.id === parseInt(useId, 10));
  if (use) {
    res.json({ data: use });
  } else {
    next({ status: 404, message: `Use ID not found: ${useId}` });
  }
}

// delete a use metric by ID
function destroy(req, res, next) {
  const { useId } = req.params;
  console.log(`Attempting to delete use with ID: ${useId}`);
  
  const index = uses.findIndex((use) => use.id === Number(useId));
  if (index !== -1) {
    uses.splice(index, 1); // Remove the use metric
    res.sendStatus(204); // No content
  } else {
   next({ status: 404, message: `Use ID ${useId} not found` });
  }
}

module.exports = {
  list,
  read,
  delete: destroy, // Ensure this is correctly exported
};

