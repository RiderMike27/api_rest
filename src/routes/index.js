const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    const data = {
        "name": "Miguel Villalba",
        "website": "faztweb.com"
    };
    res.json(data);
});

module.exports = router;