
let array = []
let string = ""

function arrayNumber(button){
    
        array.push(button)
        string = array.join('')
        document.querySelector('.screen').innerHTML = string
    
}

function equals(button) {
    let final = eval(string)
    document.querySelector('.screen').innerHTML = final
    

}

function fromStart(final,string){
    array = []
    final = 0
    string = '0'
    document.querySelector('.screen').innerHTML = final

}

function erasePrevious(button){
    array.pop()
    arrayNumber(button)

}




 


