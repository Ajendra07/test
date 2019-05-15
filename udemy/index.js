const express = require('express') ;
const cors = require('cors') ;
const mysql = require('mysql') ;

const app = express() ;

const SELECT_ALL_QUERY = 'SELECT * FROM courses' ;
const SELECT_ALL_DESIGN = 'SELECT * FROM designs' ;
const SELECT_ALL_MUSIC = 'SELECT * FROM musics' ;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'react_sql'
}) ;

connection.connect(err => {
    if(err) {
        return err ;
    }
}) ;

app.use(cors()) ;

app.get('/', (req, res) => {
    connection.query(SELECT_ALL_QUERY, (err, results) => {
        if(err)
        {
            return res.send(err) ;
        }
        else {
            return res.json({
                data: results
            })
        }
    }) ;
}) ;

app.get('/design', (req, res) => {
    connection.query(SELECT_ALL_DESIGN, (err, results) => {
        if(err)
        {
            return res.send(err) ;
        }
        else {
            return res.json({
                data: results
            })
        }
    }) ;
}) ;

app.get('/music', (req, res) => {
    connection.query(SELECT_ALL_MUSIC, (err, results) => {
        if(err)
        {
            return res.send(err) ;
        }
        else {
            return res.json({
                data: results
            })
        }
    }) ;
}) ;

app.listen(4000, () => {
    console.log('Hi')
}) ;