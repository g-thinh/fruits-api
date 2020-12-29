const router = require("express").Router();

router.get("/api/test", (req, res) => {
  try {
    return res.status(200).json({
      sucess: true,
      message: "Test completed!",
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      message: error,
    });
  }
});

module.exports = router;
