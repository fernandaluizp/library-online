//index.test.js
const index = require('../routes/books');
const request = require("supertest");
const express = require("express");
const app = express();

it('Aplicar desconto', () => {
    const result = index.aplicarDesconto(10,5);
    expect(result).toEqual(5);
})