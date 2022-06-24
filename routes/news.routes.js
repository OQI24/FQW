const {Router} = require('express');
const router = Router();
const fs = require('fs');
const path = require('path');
const uuid = require('uuid')

const filePath = `${path.join(__dirname)}/../Data/`;
const db = 'data.news.json';


router.get('/', async (req, res) => {
    fs.readFile(path.join(filePath, db), 'utf-8', (err, content) => {
        if (err) {
            res.status(404).json({message: 'Not found'})
            throw err;
        }

        if (content) {
            res.status(200).send({data: content});
        } else {
            res.status(200).send({data: null});
        }
    });
});

router.post('/create', async (req, res) => {
    //Read DB
    await fs.readFile(path.join(filePath, db), 'utf-8', (err, content) => {
        if (err) {
            res.status(404).json({message: 'Not found'})
            throw err;
        }

        const data = content ? JSON.parse(content) : [];

        data.push({...req.body, id: uuid.v4()});
        fs.writeFile(filePath + db, JSON.stringify(data), err => {
            if (err) {
                throw err;
            }
            res.status(200).json({message: 'Feed saved', data});
        })
    });
});

router.post('/change', async (req, res) => {
    //Read DB
    await fs.readFile(path.join(filePath, db), 'utf-8', (err, content) => {
        if (err) {
            res.status(404).json({message: 'Not found'})
            throw err;
        }

        const {title, id, text, img, date, priority} = req.body;

        const data = JSON.parse(content).map((elem) => {
            if (elem.id == id) {
                return {id, title, text, priority, img, date};
            }
            return elem;
        });

        fs.writeFile(filePath + db, JSON.stringify(data), err => {
            if (err) {
                throw err;
            }
            res.status(200).json({message: 'Feed changed', data});
        })
    });
});

router.post('/delete', async (req, res) => {

    //Read DB
    await fs.readFile(path.join(filePath, db), 'utf-8', (err, content) => {
        if (err) {
            res.status(404).json({message: 'Not found'})
            throw err;
        }

        if (content) {
    //Rewrite DB
            const data = JSON.parse(content);
            const result = data.filter((elem) => {
                if (!req.body.includes(elem.id)) {
                    return elem;
                } else {
                    console.log('Delete Feed ID ->', elem.id);
                }
            });
            fs.writeFile(filePath+db, JSON.stringify(result), err => {
                if (err) {
                    throw err;
                }
                res.status(200).send({message: 'Feed deleted', data: result});
            })
        }
    });
})

module.exports = router;