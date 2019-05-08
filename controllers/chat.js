// 渲染
exports.getChat = (req, res) => {
  const unknownUser = !(req.user);

  res.render('chat/chat', {
    title: 'Chat',
    unknownUser,
  });
};
// 地图
exports.getMap = (req, res) => {
  const unknownUser = !(req.user);

  res.render('api/google-maps', {
    title: 'Map',
    unknownUser,
  });
};
