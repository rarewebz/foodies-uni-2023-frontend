import axios from "axios"
import * as base_url from './public_urls'

let result
export const callApi = async (apiObject) => {
    const promise = new Promise((resolve) => {

        let headers = {}

        if (apiObject.state === "login" || apiObject.state === "renewToken") {
            headers = {
                accept: "application/json",
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        } else if (apiObject.state === "form") {
            headers = {
                'Content-Type': 'multipart/form-data',
            }
        } else {
            headers = {
                'Content-Type': 'application/json'
            }
        }

        axios[apiObject.method](`${base_url.FULL_BASE_URL}${apiObject.endPoint}`, apiObject.method !== 'get' && apiObject.method !== 'delete' ? apiObject.body : {headers: headers}, {headers: headers})
            .then(async response => {
                if (response.data.errorCode) {
                    result = await {data: response.data, message: response.data.errorContent, status: 0, success: false}
                } else {
                    result = await {data: response.data, status: 1, success: true}
                }

                resolve(result)
            }).catch(async error => {

            if (error !== undefined) {
                if (error.response === undefined) {
                    result = await {
                        success: false,
                        status: 0,
                        message: "Your connection was interrupted",
                        data: {
                            title: "Your connection was interrupted",
                            detail: ""
                        }
                    }
                } else if (error.response.status === 401) {

                    if (apiObject.state === "renewToken") {
                        result = await {
                            success: false,
                            status: 2,
                            message: error.response.data.message,
                            data: error.response.data
                        }
                    } else if (apiObject.state === "login") {
                        result = await {
                            success: false,
                            status: 0,
                            message: error.response.data.message,
                            data: error.response.data
                        }
                    } else {
                        result = await {
                            success: false,
                            status: 0,
                            message: error.response.data.error_description,
                            data: error.response.data
                        }
                    }

                } else if (error.response.status === 403) {
                    result = await {
                        success: false,
                        status: 2,
                        message: "Access is denied.",
                        data: {
                            title: "Access is denied.",
                            detail: ""
                        }
                    }
                } else if (error.response.status === 417 || error.response.status === 404) {
                    result = await {
                        success: false,
                        status: 0,
                        message: "Oops! Something went wrong.",
                        data: {
                            title: "Oops! Something went wrong.",
                            detail: ""
                        }
                    }
                } else {
                    result = await {
                        success: false,
                        status: 2,
                        message: "Sorry, something went wrong.",
                        data: {
                            title: "Sorry, something went wrong.",
                            detail: ""
                        }
                    }
                }
            } else {
                result = await {
                    success: false,
                    status: 2,
                    message: "Your connection was interrupted!",
                    data: {
                        title: "Your connection was interrupted!",
                        detail: ""
                    }
                }
            }
            resolve(result)
        })
    })
    return await promise
}
