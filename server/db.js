const express = require('express');
const mysql = require('mysql');
const app = express();


module.exports = {

    mysql: {
    
    host: 'localhost',
    
    user: 'root',
    
    password: '',
    
    database: '1902',
    
    port: 3306,

    multipleStatements: true
    
    }
    
    }