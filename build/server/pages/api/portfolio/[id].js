"use strict";
(() => {
var exports = {};
exports.id = 889;
exports.ids = [889];
exports.modules = {

/***/ 92509:
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ 43184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./firebase/admin.js
const admin = __webpack_require__(92509);
const key = __webpack_require__(77285);
try {
    admin.initializeApp({
        credential: admin.credential.cert(key)
    });
} catch (e) {
    console.log(e);
}
const firestore = admin.firestore();

;// CONCATENATED MODULE: ./pages/api/portfolio/[id].js

function handler(req, res) {
    const { query  } = req;
    const { id  } = query;
    firestore.collection("portfolio").doc(id).get().then((doc)=>{
        const data = doc.data();
        const id = doc.id;
        res.json({
            ...data,
            id
        });
    }).catch(()=>{
        res.status(404).end();
    });
}


/***/ }),

/***/ 77285:
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"portfolio-app-aa599","private_key_id":"d0fd093148d86d90286f6ce8016fcda8dbca0368","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCU62+BzfO4Y3OJ\\nq/xhv+OCrPFkuluv6IJSzjFniU4JvkuUSSx8JPIXiCF4k2ZExpnFBgwuoOnH3SAZ\\nb1GqqCePhsaX9UrGwVfBQkRyrXFx6gzwALZ+3b3Hzdtob7JvpedFyYMVPzfPgFTN\\nSfWxri0Gj816aNyFkMCjpZNaBC0/ZDbbN4hKGMpMjXUygP8vRhhr2Hq6EgIuHaRH\\ncVlu+33gKNwqH+rabUHX0UG1okIg1BsQZ220p9bAkfzQYFHAcKn795Y38xBx5THO\\nf615xjGEtLfcB4uAmwf6K6JqKY1laoTGH9njLs42Q0vhm1Zoe0Jis9g8i+x8v+1e\\nQFM1UfuvAgMBAAECggEABBUs2k1yCU1+B1d8ePyD2WXlVWNssp0t2TpjIp+7yC0A\\naMiqpvNR88yr90+PekcXVRKb+OQXApB3EY6lRHbRuglpjVkZGUCpuMb/L6vPXwCa\\nAyItmmYBfaIZX1i+/2fvt/s3D+xCXz8bYN/W8dQJW08Hs7dcpwjGcWULKZvh+OMZ\\nJwhJWbB88zNQ7e9c916WKwo5KpVEwTKu3OyJ3/JW4c/djAV7fr2jwuYzq4HsrDU5\\nSAKsMdO3WhsezrDVi5RjdFoFFlSR0ZhHf5IaeHnv0aLjWQ1mBXSWBmmYSTG91pu4\\nV5Kcw+C03aSEVh8iG/jEFP6xXTct4mStWEAuIO12eQKBgQDKlB7EMQsTeV8ouAwG\\n2OwxxiucKxN6syA2/gLEnp9WlJmxoPNU7AYnpCdEd9DotKAyFqTRfAlZgZwSmQ8E\\nGSfg/bRJHP6gUSCo17fkFA/uKcAeTQBgrtuN6Hm2BuWZ77J50OuHa+871aKnQci2\\nIxb3pFnhzQr50TKovKYLPITEywKBgQC8MNrMf4ef5sH+rTIEpdL9cycd874A+BUs\\nrPC5M2uL/Q9PSwKmtlJ04qK8kW+QFBQzO1OxZguQ57bMe8dIJGkwnSC9Q4Z4FV/Q\\n+eVP9YWC+NjRfuNHtO2D4aqpbs1uS4DG3gZFjcAFglm1qNYslxbLM0jELAEecbNb\\nd4sko+msLQKBgQC5WJBVvPF/Xdsc7FfEpBBm8gPQnPDzoJRm/D0YHHF4y/lbNgGs\\nv05aUqzCzkVLxIeVjHY8XJpJVHax5WyBuWptRnL/OhIWKGQTV1ueyGRS6cwnbRhd\\nXV7wFbXWP7UvBMps/iOhAbYfLrXlBiFX0/8dkTfTisDyFN+e1wus2DA5xQKBgACu\\nOIxWxbnJTthJ7g1gQCQUf4a3M++y9fikY3Z3/iKSdrS1s7vAmwm7LBV8fSfLOst4\\nonPYx5/thpa0t+LF5u97Efw9O0ZB5YfO74pbe/EeT0JqsA25VMaOUVytfuawNTYC\\n5Yjo21Hpx8NFagjdPwLbG59B/XsLtDdXdlRal2S9AoGBAK6bLUyIUzFkTUrm65EY\\nhCmGHiKGPTsUiOAaEHBXNU0JW+6HEajNY1Xh37Bl+cLW1SmVqr9V94W2AKhPD0Pk\\nOe/OZ8YtcWXFnEjSCtuN76W4aHMNWe02TsPlzNNJxD4Frow1n4GZm0k3Yj6TkYM0\\nJ0NnWke8HdMp3ROUIC+JW4BS\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-2ujp9@portfolio-app-aa599.iam.gserviceaccount.com","client_id":"108332808231156088222","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2ujp9%40portfolio-app-aa599.iam.gserviceaccount.com"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(43184));
module.exports = __webpack_exports__;

})();