'use strict';

const https = require("https");

function shorten(url) {
    return new Promise((resolve, reject) => {
        try {
            https.get('https://cb0t.cc/api/create?source=nodeapi&url=' + encodeURIComponent(url), function (res) {
                if (res.statusCode == 502) {
                    reject(new Error("cb0t.cc is offline."));
                    return;
                }
                var body = '';
                res.on('data', function (chunk) { body += chunk; });
                res.on('end', function () {
                    if (res.statusCode == 200 || res.statusCode == 201) {
                        try {
                            var response = JSON.parse(body);
                            resolve({url: response.url, code: response.code, message: response.message});
                        } catch (error) {
                            reject(new Error(`Failed to parse responded json.`, res))
                        }
                    } else if (res.statusCode >= 400&&res.statusCode <= 499) {
                        try {
                            var response = JSON.parse(body);
                            reject(new Error(`Server returned ${res.statusMessage} (${res.statusCode}) error: "${response.message}"`, res));
                        } catch (error) {
                            reject(new Error(`Server returned ${res.statusMessage} (${res.statusCode}) error.`, res));
                        }
                    } else if (res.statusCode >= 500&&res.statusCode <= 599) {
                        try {
                            reject(new Error(`Server returned ${res.statusMessage} (${res.statusCode}) error.`, res));
                        } catch (error) {
                            reject(new Error(`Server returned ${res.statusMessage} (${res.statusCode}) error. Try again in a minute.`, res));
                        }
                    } else {
                        reject(new Error(`Server returned unexpected status code: ${res.statusMessage} (${res.statusCode})`, res));
                    }
                });
                res.on("error", err => {
                    reject(new Error(err));
                })
            });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    shorten: shorten
};