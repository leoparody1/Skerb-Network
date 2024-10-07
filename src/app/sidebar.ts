export interface MenuItem {
    title: string;
    route: string;
    subItems?: MenuItem[];
    expanded?: boolean;
}