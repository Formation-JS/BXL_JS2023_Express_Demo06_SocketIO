const homeController = {

    index: (req, res) => {

        res.render('home/index');
    },

    chat: (req, res) => {

        res.render('home/chat');
    },

};

module.exports = homeController;