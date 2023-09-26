export const formatDate = (dataString: string) => {
    const date = new Date(dataString);
    // Intl.DateTimeFormatOptions: es un interface en JavaScript que representa las opciones de formato de fecha.
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return date.toLocaleDateString("es", options)
}