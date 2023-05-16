const { CustomAPIError } = require("../errors/custom-error")
//check if the error is a instance of Cu8stomAPIError, if it is, return the error status code and message, if not, return default message
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).json({ msg: `Something went wrong, please try again` })
}

module.exports = errorHandlerMiddleware
