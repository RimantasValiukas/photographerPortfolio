import HTTP from "./index";

const sendEmail = (emailRequest) => HTTP.post('/api/sendEmail', emailRequest);

export {
    sendEmail
}