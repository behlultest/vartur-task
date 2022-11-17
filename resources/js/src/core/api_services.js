import axios from "axios";

class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: "/api",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });
    }

    get(path) {
        return new Promise((resolve, reject) => {
            this.api.get(path).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        }
        );
    }

    postFormData(path, data) {
        return new Promise((resolve, reject) => {
            this.api.post(path, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json"
                }

            }).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    }


    post(path, data) {
        return new Promise((resolve, reject) => {
            this.api.post(path, data).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        }
        );
    }
    put(path, data) {
        return new Promise((resolve, reject) => {
            this.api.put(path, data).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        }
        );
    }

    delete(path) {
        return new Promise((resolve, reject) => {
            this.api.delete(path).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        }
        );
    }
}


export default ApiService;