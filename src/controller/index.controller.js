const repositorie = require('../repostories/index.repositories');
// Handlers for repositories
module.exports = () => ({
    get: async (req, res) => {
        const repositorieResp = await repositorie.listUsers();
        let status = repositorieResp.code;
        return res.status(status).send(repositorieResp);
    },
    post: async (req, res) => {
        let user = req.body;
        const repositorieResponse = await repositorie.createUser(user);
        return res.send(repositorieResponse)
    },
    put: async (req, res) => {
        let idUser = req.params.id;
        let user = req.body;
        const respositorieResponse = await repositorie.updateUser(idUser, user);
        return res.send(respositorieResponse)
    },
    delete: async (req, res) => {
        let idUser = req.params.id;
        const data = await repositorie.deleteUser(idUser);
        return res.send(data);
    }
});