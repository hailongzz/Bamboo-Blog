//渲染
exports.getDraw = (req, res) => {
    const unknownUser = !(req.user);
  
    res.render('draw/draw', {
      title: 'Draw',
      unknownUser,  
    });
  };