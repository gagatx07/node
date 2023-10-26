let estado = function(a){
    if(a === "SP"||a === "RJ") {
        return "estado permitido"
    } else { 
        return "estado negado"
    }
}

module.exports = estado