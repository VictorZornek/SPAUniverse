import { Router } from "./router.js"

const router = new Router()

router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()   // navegação pelas setas de voltar e avançar página
window.route = () => router.route()  // navegação de rotas sem recarregar a página