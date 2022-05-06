export const filterGenre = (genre, array) => {
    let result = array.filter((r) => r['genres'].includes(genre));
    return result;
};

export const dynamicSortName = (num, property) => {
    return function (a, b) {
        if(num === 1) {
            return b[property].localeCompare(a[property]);
        } else {
            return a[property].localeCompare(b[property]);
        };
    };
};

export const sortName = (num, array) => {
    if(num !== 1 && num !== -1) return console.log('first arg must be 1 or -1');
    return array.sort(dynamicSortName(num, 'name'));
};

export default function dynamicSortRating(num, property) {
    return function (a, b) {
        if(num === 1) {
            return a[property] - b[property];
        } else {
            return b[property] - a[property];
        };
    };
};

export const sortRating = (num, array) => {
    if(num !== 1 && num !== -1) return console.log('first arg must be 1 or -1');
    return array.sort(dynamicSortRating(num, 'rating'));
};