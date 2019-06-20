exports.getDocument = (req, res) => {
  const unknownUser = !(req.user);

  res.render('document', {
    title: 'Document',
    unknownUser,
  });
};

exports.getDocumentApplication = (req, res) => {
  const unknownUser = !(req.user);
  res.render('document/Application', {
    title: 'Application',
    unknownUser,
  });
};
exports.getDocumentServer = (req, res) => {
  const unknownUser = !(req.user);
  res.render('document/Server', {
    title: 'Server',
    unknownUser,
  });
};
exports.getDocumentSystem = (req, res) => {
  const unknownUser = !(req.user);
  res.render('document/System', {
    title: 'System',
    unknownUser,
  });
};
exports.getDocumentDatabase = (req, res) => {
  const unknownUser = !(req.user);
  res.render('document/Database', {
    title: 'database',
    unknownUser,
  });
};
exports.getDocumentGame = (req, res) => {
  const unknownUser = !(req.user);
  res.render('document/Game', {
    title: 'System',
    unknownUser,
  });
};
exports.getDocumentReact = (req, res) => {
  const unknownUser = !(req.user);
  res.render('document/React', {
    title: 'database',
    unknownUser,
  });
};

