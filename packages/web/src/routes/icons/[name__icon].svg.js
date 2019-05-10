import { _get } from '@ctx-core/font-awesome/[name__icon].svg'
import { dev } from '@sapper/internal/manifest-server'
import {
	register__code_solid,
	register__cogs_solid,
	register__history_solid,
	register__language_solid,
	register__laptop_code_solid,
	register__lightbulb_regular,
	register__sync_solid,
} from '@ctx-core/font-awesome'
register__code_solid()
register__cogs_solid()
register__history_solid()
register__language_solid()
register__laptop_code_solid()
register__lightbulb_regular()
register__sync_solid()
export const get = _get(async (req, res) => {
	res.setHeader('Cache-Control', dev ? 'no-cache' : 'max-age=600')
})