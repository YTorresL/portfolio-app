"use strict";
exports.id = 577;
exports.ids = [577];
exports.modules = {

/***/ 16577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ fetchPortfolio)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57361);


const firebaseConfig = {
    apiKey: "AIzaSyB60xBJld8qubLvb7fYpfEILST-y2ob-ns",
    authDomain: "portfolio-app-aa599.firebaseapp.com",
    projectId: "portfolio-app-aa599",
    storageBucket: "portfolio-app-aa599.appspot.com",
    messagingSenderId: "1046240782827",
    appId: "1:1046240782827:web:91791c7f7b01da3b8fd1ae",
    measurementId: "G-W6L0HKE2KW"
};
firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__/* ["default"].initializeApp */ .Z.initializeApp(firebaseConfig);
const db = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__/* ["default"].firestore */ .Z.firestore();
const fetchPortfolio = ()=>{
    return db.collection("portfolio").orderBy("Date", "desc").get().then((snapshot)=>{
        return snapshot.docs.map((doc)=>{
            const data = doc.data();
            const id = doc.id;
            return {
                id,
                ...data
            };
        });
    });
};


/***/ })

};
;