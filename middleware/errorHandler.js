const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  // Use err.statusCode if set, else fallback
  const statusCode = res.statusCode && res.statusCode >= 400 ? res.statusCode : 500;
  res.status(statusCode);

  // Decide response based on standard HTTP codes
  switch (statusCode) {
    case constants.VALIDATION_ERROR: // 400
      return res.json({ 
        title: "Validation Failed",
        message: err.message,
        // optionally omit stack in production
        stack: err.stack 
      });

    case constants.NOT_FOUND: // 404
      return res.json({
        title: "Not Found",
        message: err.message,
        stack: err.stack
      });

    case 401: // Unauthorized — using standard code
    case constants.UNAUTHORIZED:
      return res.json({
        title: "Unauthorized",
        message: err.message,
        stack: err.stack
      });

    case constants.FORBIDDEN: // 403
      return res.json({
        title: "Forbidden",
        message: err.message,
        stack: err.stack
      });

    case constants.SERVER_ERROR: // 500
    default:
      // catch-all error
      return res.json({
        title: "Server Error",
        message: err.message || "Internal Server Error",
        stack: err.stack
      });
  }
};

module.exports = errorHandler;
