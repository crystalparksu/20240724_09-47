export const qs = {
    stringURL: (urlObject = null, url = null) => {
        if (!urlObject || !Object.keys(urlObject).length) return '';
        let andStr = '?';

        if (url) {
            if (typeof window !== 'undefined') {
                const loc = new URL(window.location.origin + url);
                if (loc.search) andStr = '&';
            }
        }

        return andStr + qs.objectQuery(urlObject);
    },

    objectQuery: data => {
        if (!Object.keys(data).length) return '';
        const pairs = [];
        for (let prop in data) {
            if (data.hasOwnProperty(prop)) {
                let k = prop;
                let v = data[prop];
                pairs.push(`${k}=${v}`);
            }
        }
        return pairs.join('&');
    },

    queryObject: searchString => {
        if (!searchString) return false;
        return searchString
            .substring(1)
            .split('&')
            .reduce((result, next) => {
                let pair = next.split('=');
                result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
                return result;
            }, {});
    },
};
