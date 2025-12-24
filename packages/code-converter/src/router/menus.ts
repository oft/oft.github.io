import { routes } from "./routes";

export const menus = routes.map(item => ({
    title: item.meta?.title || item.name || item.path,
    path:item.path
}))