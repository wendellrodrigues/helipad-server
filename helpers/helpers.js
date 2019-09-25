

module.exports = { 


  sendTestMsg: async(req, res) => {
    res.json({
      message: 'Now it is working better'
    });
  }
}