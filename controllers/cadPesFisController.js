const session = require("express-session")
const { validationResult } = require("express-validator")
const validateRegister = require("../middlewares/validateRegister")
const bcrypt = require("bcrypt")
const fs = require("fs")
const path = require("path")

let cadastroJson = path.join("cadastro.json")

const cadPesFisController = {
    cadastroPessoaFisica: (req, res) => {
        return res.render("cad_pes_fisica")
    },

    formCadPessoaFisica: (req, res) => {
        let { nome, cpf, rg, tel, endereco, estado, cidade, bairro, cep, numero } = req.body
        let cadastros = JSON.stringify({ nome, cpf, rg, tel, endereco, estado, cidade, bairro, cep, numero })
        fs.appendFileSync(cadastroJson, cadastros)
        return res.send("formulario recebido com sucesso!!!")

    }
}

module.exports = cadPesFisController