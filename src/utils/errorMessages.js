const returnErrorMessage = (res, statusError, messageError) => res.status(statusError)
.json({ message: messageError });

module.exports = returnErrorMessage;