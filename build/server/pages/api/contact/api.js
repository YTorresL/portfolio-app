"use strict";
(() => {
var exports = {};
exports.id = 641;
exports.ids = [641];
exports.modules = {

/***/ 56673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./config/nodemailer.js

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const transporter = external_nodemailer_default().createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass
    }
});
const mailOptions = {
    from: email,
    to: email,
    subject: "New message from your website",
    text: "You have a new message from your website"
};

;// CONCATENATED MODULE: ./pages/api/contact/api.js

function sanitizeInput(input) {
    const sanitizedInput = input.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
    return sanitizedInput;
}
const handler = async (req, res)=>{
    if (req.method === "POST") {
        const data = req.body;
        if (!data.name || !data.email || !data.subject || !data.message) {
            return res.status(400).json({
                message: "Bad Request"
            });
        }
        try {
            await transporter.sendMail({
                ...mailOptions,
                html: `
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tr>
    <td align="center" valign="top" style="background-color: #f5f5f5; padding: 70px 0;">
      <table cellpadding="0" cellspacing="0" border="0" width="400" style="background-color: #ffffff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <tr>
          <td align="center" valign="top" style="padding: 30px;">
            <h1 style="font-size: 24px; line-height: 32px; margin: 0 0 20px;">YTorres<span style="color: #f59e0b;"> Portfolio </span></h1>
            <p style="font-size: 14px; line-height: 20px; margin: 0 0 20px;">You have a new message from your website:</p>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="font-size: 16px; line-height: 20px; margin: 0 0 10px;"><strong>Name:</strong> ${sanitizeInput(data.name)}</li>
              <li style="font-size: 16px; line-height: 20px; margin: 0 0 10px;"><strong>Email:</strong> ${sanitizeInput(data.email)}</li>
              <li style="font-size: 16px; line-height: 20px; margin: 0 0 10px;"><strong>Subject:</strong> ${sanitizeInput(data.subject)}</li>
              <li style="font-size: 16px; line-height: 20px; margin: 0 0 10px;"><strong>Message:</strong> ${sanitizeInput(data.message)}</li>
            </ul>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
        `
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                message: err.message
            });
        }
    }
    return res.status(400).json({
        message: "Bad Request"
    });
};
/* harmony default export */ const api = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(56673));
module.exports = __webpack_exports__;

})();