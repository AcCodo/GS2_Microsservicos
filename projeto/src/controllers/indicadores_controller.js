const repository = require('../repositories/repo')

exports.get = async (req, res, next) => {
    const data = await repository.getIndicadores(req.params.id)

    if (data.length == 0) {
        res.status(204).send("Indicador inexistente")
        return
    }

    res.status(200).send(data)
}