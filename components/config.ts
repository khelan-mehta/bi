export const config = {
    urls: [{nm: "projects", uri: "/projects"},{nm: "pricing", uri: "/pricing"}, {nm: "join us", uri: "/join"}, {nm: "about", uri: "/about"}, {nm: "contact", uri:`tel:${process.env.NEXT_PUBLIC_PHONE_CC}${process.env.NEXT_PUBLIC_PHONE}`}]
}