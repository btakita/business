import '@ctx-core/font-awesome/[name__icon].svg'
import { _get } from '@ctx-core/font-awesome/[name__icon].svg'
import { dev } from '@sapper/internal/manifest-server'
export const get = _get(async (req, res) => {
	res.setHeader('Cache-Control', dev ? 'no-cache' : 'max-age=600')
})
