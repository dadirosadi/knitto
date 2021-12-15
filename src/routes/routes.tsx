import Todo from "../pages/todo/todo.component";
import Catalog from "../pages/catalog/catalog.component";
import Admin from "../pages/admin/admin.component";

export const Routes: any = [
    {
        name: 'Catalog',
        path: '/',
        component: <Catalog />,
        icon: "",
    },
    {
        name: 'Todo',
        path: '/todo',
        component: <Todo />,
        icon: "",
    },
    {
        name: 'Admin',
        path: '/admin',
        component: <Admin />,
        icon: "",
    },
];
