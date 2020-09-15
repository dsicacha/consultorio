const indexCtrl = {};

indexCtrl.index = (req,res) => {
    res.send('Welcome to my API desde Index.Routes con controllers');
};

module.exports = indexCtrl;