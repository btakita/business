import { _get } from '@ctx-core/font-awesome/[name__icon].svg'
import { dev } from '@sapper/internal/manifest-server'
import {
	register__cogs_solid,
} from '@ctx-core/font-awesome'
register__cogs_solid()
export const get = _get(async (req, res) => {
	res.setHeader('Cache-Control', dev ? 'no-cache' : 'max-age=600')
})