import english from './en.json';

export const formatMessage = (path, language) => {
    let langFile;
    switch (language) {
        case 'English':
            langFile = english;
            break;
        default:
            langFile = english;
    }

    const pathArray = path.split('.');
    let returnedValue = langFile[pathArray[0]];
    for (let i = 1; i < pathArray.length; i++) {
        returnedValue = returnedValue[pathArray[i]];
    }

    return returnedValue;
}
