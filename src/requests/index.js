const axios = require('axios').default;

export default (method, url, {onOk, onErr, ...rest}) => {
    axios({
        method,
        url,
        ...rest,
    }).then(resp => onOk(resp))
    .catch(err => onErr(err));
}