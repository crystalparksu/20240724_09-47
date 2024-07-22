import axios from 'axios';
import { qs } from './qs';


//API 서버를 받았을 때
const axiosClient = axios.create({
    baseURL: 'http://15.164.163.31:8000',
});

export const request = async ({ url, method, data = null }) => {
    try {
        const response = await axiosClient({
            method,
            url,
            data,
        });

        return response;
    } catch (error) {
        // console.error('#error-web-client: ', error.toString());

        if (error.toString().includes('Network Error')) {
            return await console.log(
                '네트워크 오류로 처리되지 않았습니다. 다시 시도해주세요.'
            );
        }
    }
};


class API {
    async CALL({ method, url, data = null }) {
        return request({ method, url, data });
    }

    GET({ url, ...params }) {
        return this.CALL({
            method: 'GET',
            url: url + qs.stringURL(params.data, url),
        });
    }
}

export default new API();
