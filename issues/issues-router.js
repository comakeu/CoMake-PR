const router = require("express").Router();
const issues = require("./issues-model");

router.get("/issues", async (req, res) => {
    try {
        const result = await issues.get();
        return res.status(200).json(result)
    }catch (error) {
        return res.status(500).json({
            message: "The server encountered an unexpected condition. Pleace contact the system administrator",
            error
        })
    }
})

router.post("/issues", async (req, res) => {
    try {
        const [result] = await issues.insert(req.body);
        return res.status(201).json(result)
    }catch (error) {
        return res.status(500).json({
            message: "The server encountered an unexpected condition. Pleace contact the system administrator",
            error
        })
    }
})

module.exports = router;