/* 

Parentheses-Keys-Brackets Test-Challenge

[] = Valid
() = Valid
{} = Valid

Examples:
1. {{[()]}} = VALID
2. (([[({})]])) = VALID
3. (([[({])]])) = WRONG
4. }}} = WRONG
5. []() = VALID
6. ({}[]) = VALID
7. {(})} = WRONG
8. ({}[]) = VALID
9. )()( = WRONG
10. [({}){([(([[({})]]))])}({})] = VALID

*/

var p = 0;
var k = 0;
var c = 0;
const openers = ['(','{','['];
const closers = [')','}',']'];

const phrase = '(([{({[[{]})}]})])])}])';

try {
    if(closers.includes(phrase.substring(0,1)) && (phrase.length%2)!=0 ){
        throw 'Wrong';
    }else{
        opener(phrase.substring(0,1));
    }
    
    for(let i=1;i<phrase.length;i++){
        const prev = phrase.substring(i-1,i);
        const current = phrase.substring(i,i+1);
        if(openers.includes(prev)){
            if(closers.includes(current)){
                if((prev == '(' && current == ')')){
                    closer(current);
                }else if(prev == '{' && current == '}'){
                    closer(current);
                }else if(prev == '[' && current == ']'){
                    closer(current);
                }else{
                    throw 'Wrong';
                }
            }else{
                opener(current);
            }
        }else{
            if(closers.includes(current)){
                const mirror = phrase.substring((phrase.length-i-1),(phrase.length-i));
                if(mirror == '(' && current == ')' ){
                    closer(current);
                }else if(mirror == '[' && current == ']') {
                    closer(current);
                }else if(mirror == '{' && current == '}'){
                    closer(current);
                }else{
                    throw 'Wrong';
                }
            }else{
                opener(current);
            }
        }
    }
    
    if((p+k+c) == 0){
        console.log('Valid');
    }else{
        throw 'Wrong';
    }

} catch (error) {
    console.log(error);
}

function opener(char){
    switch (char) {
        case '(':
            p++;
        break;

        case '{':
            k++;
        break;

        case '[':
            c++;
        break;
    }
}

function closer(char){
    switch (char) {
        case ')':
            p--;
        break;

        case '}':
            k--;
        break;

        case ']':
            c--;
        break;
    }
}