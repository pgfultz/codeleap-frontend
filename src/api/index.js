import {create} from 'apisauce';

export const api = create({
    baseURL: "https://dev.codeleap.co.uk/",
});

export function getDataApi() {
    return api.get('/careers/');
}

export function postDataApi(data) {
    return api.post('/careers/', data);
}

export function editDataApi(postId, data) {
    return api.patch(`/careers/${postId}/`, data);
}

export function deleteDataApi(postId) {
    return api.delete(`/careers/${postId}/`);
}