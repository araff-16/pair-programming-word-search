//Collaborative Effort
//araff-16
//Muaadahmed



const horizontalForward = function(letters,word){
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    return false
}

const horizontalBack = function(letters,word){
    
    const backHorizontalJoin = letters.map(ls => ls.reverse().join(''))
    for (let l of backHorizontalJoin) {
        if (l.includes(word)) return true;
    }
    return false
}

const verticalDown = function (letters,word,row,col){
    
    
    let verticalJoin = [];
    for (let j = 0; j < col; j++){
        let arr = [];
        for (let i =0; i < row; i++){
            arr.push(letters[i][j])
        }
        verticalJoin.push(arr.join(''));
    }
    for (let vert of verticalJoin){
        if (vert.includes(word)) return true;
    }
    return false
}

const verticalUp = function (letters,word,row,col){
    
    backwordVerticalJoin =[] 
    for (let j = col-1; j >= 0; j--){
        let arr = [];
        for (let i =row-1; i >= 0; i--){
            arr.push(letters[i][j])
        }
        backwordVerticalJoin.push(arr.join(''));
    }

    for (let vert of backwordVerticalJoin){
        if (vert.includes(word)) return true;
    }
}

const wordSearch = (letters, word) => { 
    

    if (letters.length === 0) {
        return false
    }
    const row = letters.length;
    const col = letters[0].length;

    if (word.length > row && word.length > col) {
        return false;
    }
    if (horizontalForward(letters,word)) {
        return true
    }
    
    if (horizontalBack(letters,word)){
        return true
    }

    
    if (verticalDown(letters,word,row,col)){
        return true
    }


    if (verticalUp(letters,word,row,col)){
        return true
    }

    return false
}

module.exports = wordSearch


// console.log(wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'FRANK'))

//   console.log('TESSTT')
//   console.log('hfhfhfranksfdf'.includes('frank'))