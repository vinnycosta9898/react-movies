export const formatDate = (date: string) => {
    const newDate = String(date).split("-").reverse().join("/")
    return newDate;
}