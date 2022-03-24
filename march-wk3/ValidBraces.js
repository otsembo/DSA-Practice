function validBraces(braces){

    let chars = [];

    let data = braces.split('');

    for(let i = 0; i < data.length; i++){

        const x = data[i];

        if(x === '[' || x === '(' || x === '{'){
            chars.push(x)
        }else if(x === ']'){
            if(chars.length === 0 || chars[chars.length - 1] !== '['){
                return false;
            }
            chars.pop()

        }else if(x === '}'){

            if(chars.length === 0 || chars[chars.length - 1] !== '{'){
                return false;
            }
            chars.pop()

        }else if(x === ')'){

            if(chars.length === 0 || chars[chars.length - 1] !== '('){
                return false;
            }
            chars.pop()

        }

    }

    return chars.length === 0;


}