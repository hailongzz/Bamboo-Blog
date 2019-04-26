// 渲染
exports.getGame = (req, res) => {
  const unknownUser = !(req.user);

  res.render('game/game', {
    title: 'Game',
    unknownUser,
  });
};
