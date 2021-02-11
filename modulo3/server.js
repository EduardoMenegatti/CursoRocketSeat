const express = require('express')
const nunjuncks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")
nunjuncks.configure("views", {
    express: server
})

server.get("/", function (req, res) {
    const data = {
        avatar_url: "https://media-exp1.licdn.com/dms/image/C4D03AQFdyxT51d8UuQ/profile-displayphoto-shrink_200_200/0/1589457909659?e=1618444800&v=beta&t=gpYbgMvbByRjH9kp74b-dobI2z70Zzacz1vgzS9IV50",
        name: "Jacqueline M. G. Marques",
        role:"Cientista de Alimentos",
        description: "Focada em gerenciamento e produção de alimentos com as boas práticas",
        links:[
            {name:"Curriculo Lattes", url:"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4223048U7"},
            {name:"Instagram", url:"https://www.instagram.com/jacquelinegerageconsultoria/?hl=pt-br"},
            {name:"Linkedin", url:"https://www.linkedin.com/in/jacqueline-gerage-b7305356/"},
            {name: "ESALQ", url: "https://www.esalq.usp.br"},
        ]
    }
    return res.render("about",{about:data})
})

server.get("/portfolio", function (req, res) {
    return res.render("portfolio",{items:videos})
})

server.listen(5000, function () {
    console.log("server is running")
})
