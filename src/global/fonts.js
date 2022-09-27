const fonts = (font) => {
    switch (font) {
        case 'regular':
            return 'Roboto_400Regular';
        case 'bold':
            return 'Roboto_700Bold';
        default:
            return 'Roboto_400Regular';
    }
}

export default fonts;