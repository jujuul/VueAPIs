import replaceNumToChs from './replaceNumToChs'

const setStatusStyle = (statusString) => {
    switch (statusString) {
        case '一':
            return 'one';
        case '二':
            return 'two';
        case '三':
            return 'three';
        case '四':
            return 'four';
    }
}

export {
    replaceNumToChs,
    setStatusStyle
}