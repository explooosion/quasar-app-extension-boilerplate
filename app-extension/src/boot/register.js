import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-my-ui'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
