import { stores } from '@sapper/app'
import { _now__millis } from '@ctx-core/time'
export function __click__spread__route__fix(event) {
  const { session } = stores()
	session.set(_now__millis())
}