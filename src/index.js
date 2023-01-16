const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let MORSE_TABLE_MOD_1 = Object.keys(MORSE_TABLE); 
    let MORSE_TABLE_MOD_2 = Object.values(MORSE_TABLE);
    let MORSE_TABLE_MOD_1_New = MORSE_TABLE_MOD_1.map(function(item){
    let result = item.replace(/-/g,'11').replace(/\./g,'10');
    let resultConst = result.length;
    if(resultConst < 10){
        for(let i = 0;i < 10 - resultConst;i++){
            result = '0' + result;
        }
    }
    return result;
    }

    )
    let array = [];
    for (let i = 1; i < expr.length/10;i++){
array[i] = expr.slice(i * 10,(i + 1) * 10);
    }
    array[0] = expr.slice(0,10);
    let arrayNew = array.map(function(item){
        return MORSE_TABLE_MOD_2[MORSE_TABLE_MOD_1_New.indexOf(item)];
    }

    );
    return arrayNew.join('');
    // write your solution here
}
// write your solution here
module.exports = {
    decode
}