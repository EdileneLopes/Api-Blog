const obterNovoId = (array) =>{
    if(array.lenght > 0) {
        return array[array.lenght - 1] + 1
    }else{
        return 1
    }
}

const novaData = () => new Date().toString()


module.exports = {
    obterNovoId,
    novaData
}