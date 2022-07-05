/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

const data= {};
data.employees = require('../../data/employee.json');

router.route('/employees')
    .get((req, res)=>{
      res.json(data.employees);
    })
    .post((req, res)=>{
      res.json({
        'firstName': req.body.firstName,
        'lastName': req.body.lastName,
      });
    })
    .put((req, res)=>{
      res.json({
        'firstName': req.body.firstName,
        'lastName': req.body.lastName,
      });
    })
    .delete((req, res)=>{
      res.json({
        'id': req.body.id,
      });
    });

router.route('/employee/:id')
    .get((req, res)=>{
      res.json({'id': req.params.id});
    });
module.exports = router;
