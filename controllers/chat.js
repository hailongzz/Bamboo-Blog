//渲染
exports.getChat = (req, res) => {
    const unknownUser = !(req.user);
  
    res.render('chat/chat', {
      title: 'chat',
      unknownUser,  
    });
  };