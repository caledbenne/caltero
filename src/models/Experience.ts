export interface Experience {
    companyName: string,
    icon: string,
    iconBg: string,
    date: string,
    roles: {
        title: string,
        date?: string,
        points: string[]
    }[]
}