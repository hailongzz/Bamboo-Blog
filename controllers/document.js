exports.getDocument = (req, res) => {
  const unknownUser = !(req.user);

  res.render('document/index', {
    title: 'document',
    unknownUser,
  });
};
