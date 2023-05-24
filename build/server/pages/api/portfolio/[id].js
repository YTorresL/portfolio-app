"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/portfolio/[id]";
exports.ids = ["pages/api/portfolio/[id]"];
exports.modules = {

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "(api)/./firebase/admin.js":
/*!***************************!*\
  !*** ./firebase/admin.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firestore\": () => (/* binding */ firestore)\n/* harmony export */ });\nconst admin = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\nconst serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);\ntry {\n    admin.initializeApp({\n        credential: admin.credential.cert(serviceAccount)\n    });\n} catch (e) {\n    console.log(e);\n}\nconst firestore = admin.firestore();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9maXJlYmFzZS9hZG1pbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsUUFBUUMsbUJBQU9BLENBQUMsc0NBQWdCO0FBRXRDLE1BQU1DLGlCQUFpQkMsS0FBS0MsS0FBSyxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLHdCQUF3QjtBQUV0RSxJQUFJO0lBQ0ZQLE1BQU1RLGFBQWEsQ0FBQztRQUNsQkMsWUFBWVQsTUFBTVMsVUFBVSxDQUFDQyxJQUFJLENBQUNSO0lBQ3BDO0FBQ0YsRUFBRSxPQUFPUyxHQUFHO0lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7QUFDZDtBQUVPLE1BQU1HLFlBQVlkLE1BQU1jLFNBQVMsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1hcHAvLi9maXJlYmFzZS9hZG1pbi5qcz9jNGQ0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFkbWluID0gcmVxdWlyZShcImZpcmViYXNlLWFkbWluXCIpXG5cbmNvbnN0IHNlcnZpY2VBY2NvdW50ID0gSlNPTi5wYXJzZShwcm9jZXNzLmVudi5GSVJFQkFTRV9TRVJWSUNFX0FDQ09VTlQpXG5cbnRyeSB7XG4gIGFkbWluLmluaXRpYWxpemVBcHAoe1xuICAgIGNyZWRlbnRpYWw6IGFkbWluLmNyZWRlbnRpYWwuY2VydChzZXJ2aWNlQWNjb3VudCksXG4gIH0pXG59IGNhdGNoIChlKSB7XG4gIGNvbnNvbGUubG9nKGUpXG59XG5cbmV4cG9ydCBjb25zdCBmaXJlc3RvcmUgPSBhZG1pbi5maXJlc3RvcmUoKVxuIl0sIm5hbWVzIjpbImFkbWluIiwicmVxdWlyZSIsInNlcnZpY2VBY2NvdW50IiwiSlNPTiIsInBhcnNlIiwicHJvY2VzcyIsImVudiIsIkZJUkVCQVNFX1NFUlZJQ0VfQUNDT1VOVCIsImluaXRpYWxpemVBcHAiLCJjcmVkZW50aWFsIiwiY2VydCIsImUiLCJjb25zb2xlIiwibG9nIiwiZmlyZXN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./firebase/admin.js\n");

/***/ }),

/***/ "(api)/./pages/api/portfolio/[id].js":
/*!*************************************!*\
  !*** ./pages/api/portfolio/[id].js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/firebase/admin */ \"(api)/./firebase/admin.js\");\n\nfunction handler(req, res) {\n    const { query  } = req;\n    const { id  } = query;\n    _firebase_admin__WEBPACK_IMPORTED_MODULE_0__.firestore.collection(\"portfolio\").doc(id).get().then((doc)=>{\n        const data = doc.data();\n        const id = doc.id;\n        res.json({\n            ...data,\n            id\n        });\n    }).catch(()=>{\n        res.status(404).end();\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9ydGZvbGlvL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEM7QUFFN0IsU0FBU0MsUUFBU0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDekMsTUFBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR0Y7SUFDbEIsTUFBTSxFQUFFRyxHQUFFLEVBQUUsR0FBR0Q7SUFFZkosaUVBQ2EsQ0FBQyxhQUNYTyxHQUFHLENBQUNGLElBQ0pHLEdBQUcsR0FDSEMsSUFBSSxDQUFDLENBQUNGLE1BQVE7UUFDYixNQUFNRyxPQUFPSCxJQUFJRyxJQUFJO1FBQ3JCLE1BQU1MLEtBQUtFLElBQUlGLEVBQUU7UUFFakJGLElBQUlRLElBQUksQ0FBQztZQUNQLEdBQUdELElBQUk7WUFDUEw7UUFDRjtJQUNGLEdBQ0NPLEtBQUssQ0FBQyxJQUFNO1FBQ1hULElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO0lBQ3JCO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1hcHAvLi9wYWdlcy9hcGkvcG9ydGZvbGlvL1tpZF0uanM/NjkxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tICdAL2ZpcmViYXNlL2FkbWluJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyIChyZXEsIHJlcykge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSByZXFcbiAgY29uc3QgeyBpZCB9ID0gcXVlcnlcblxuICBmaXJlc3RvcmVcbiAgICAuY29sbGVjdGlvbigncG9ydGZvbGlvJylcbiAgICAuZG9jKGlkKVxuICAgIC5nZXQoKVxuICAgIC50aGVuKChkb2MpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpXG4gICAgICBjb25zdCBpZCA9IGRvYy5pZFxuXG4gICAgICByZXMuanNvbih7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIGlkXG4gICAgICB9KVxuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5lbmQoKVxuICAgIH0pXG59XG4iXSwibmFtZXMiOlsiZmlyZXN0b3JlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInF1ZXJ5IiwiaWQiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJqc29uIiwiY2F0Y2giLCJzdGF0dXMiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/portfolio/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/portfolio/[id].js"));
module.exports = __webpack_exports__;

})();