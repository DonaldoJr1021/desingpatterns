//Handlers for do the connection with others Apis
module.exports = resourse => ({axios}) => ({
    get: async (req, res) => {
        const {data} = await axios.get(`/${resourse}`);
        return res.send(data)
    },
    post: async (req, res) => {
        const {data} = await axios.post(`/${resourse}`, req.body);
        return res.send(data)
    },
    put: async (req, res) => {
        const {data} = await axios.put(`/${resourse}/${req.params.id}`, req.body);
        return res.send(data)
    },
    delete: async (req, res) => {
        await axios.delete(`/${resourse}/${req.params.id}`);
        return res.sendStatus(204)
    }
});