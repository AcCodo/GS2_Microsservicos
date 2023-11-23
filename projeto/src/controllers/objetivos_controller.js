const repository = require('../repositories/repo')

exports.get = async (req, res, next) => {
    const data = await repository.getObjetivos()
    const extraData = await repository.getDistictDescricoes()

    data.push(extraData)

    res.status(200).send(data)
}