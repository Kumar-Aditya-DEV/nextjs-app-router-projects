export type NavbarType = {
    label: string,
    href: string
}

export const NavList: NavbarType[] = [
    {
        label: "Students",
        href: "/students"
    },
    {
        label: "Departments",
        href: "/departments"
    },
    {
        label: "About",
        href: "/about"
    }
]