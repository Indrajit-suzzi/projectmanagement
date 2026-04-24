import ApiResponse from "../utils/api-response.js";

const healthCheck = (req, res) => {
  try {
    return res.status(200).json({
      message: "Server is running",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export { healthCheck };
