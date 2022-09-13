const colors = (color) => {
    switch (color) {
        case 'primary':
            return '#FFF0B8';
        case 'secondary':
            return '#142F30';
        case 'green':
            return '#4caf50';
        case 'red':
            return '#f44336';
        case 'blue':
            return '#42a5f5';
        case 'yellow':
            return '#fdd835';
        case 'brown':
            return '#795548';
        case 'white':
            return '#e0e0e0';
        case 'purple':
            return '#9c27b0';
        case 'pink':
            return '#f06292';
        case 'grey':
            return '#9e9e9e';
        case 'black':
            return '#424242';
        default:
            return color;
    }
}

export default colors;