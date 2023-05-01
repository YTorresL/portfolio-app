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
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
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