import { AdminApi, PublicApi } from '@oryd/kratos-client'

const publicEndpoint = new PublicApi('https://public.ory-kratos')
const adminEndpoint = new AdminApi('https://admin.ory-kratos')

const needsLogin = (req, res, next) => {
    new publicEndpoint.whoami(req)
        .then(({ body }) => {
            req.user = { session: body }
            next()
        })
        .catch(() => {
            res.redirect('/login')
        })
}