export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault() // para que não seja realizado o padrão do click na tag <a>

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        
        fetch(route).then(data => data.text()).then(html => {
            this.changeBackground(pathname)
            document.querySelector("#app").innerHTML = html
        })
    }

    changeBackground(pathname) {
        const body = document.querySelector('body')

        if(pathname === '/') {
            body.classList.add('home')
            return
        }

        if(pathname === '/universe') {
            body.classList.add('universe')
            return
        }

        if(pathname === '/exploration') {
            body.classList.add('exploration')
            return
        }

    }
}

export default new Router()