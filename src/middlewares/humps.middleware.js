import humps from 'humps'

export default () => (req, res, next) => {
    console.log("before", req.body)
    req.body = humps.camelizeKeys(req.body)
    req.params = humps.camelizeKeys(req.params)
    req.query = humps.camelizeKeys(req.query)
    console.log("after", req.body)
    next()
}

