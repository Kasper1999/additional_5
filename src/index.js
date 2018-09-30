module.exports = function check(str, bracketsConfig) {
  // your solution
  var symbols = str.split('');
  var openBracketsStack = [];
  var result = true;
  debugger;
  
  for (i = 0; i < symbols.length; i++) {
      var curSym  = symbols[i];
      if (curSym === '(' || curSym === '[' || curSym === '{' || curSym === '1' || curSym === '3' || curSym === '5') {
          openBracketsStack.push(curSym);
      } else if(curSym === '|' ){
          var lastOpenBracket = openBracketsStack[openBracketsStack.length - 1];
        if(lastOpenBracket!='|' || i==0)
        openBracketsStack.push(curSym);
        else if(lastOpenBracket==='|') openBracketsStack.pop();
      } else if(curSym === '7' ){
          var lastOpenBracket = openBracketsStack[openBracketsStack.length - 1];
        if(lastOpenBracket!='7' || i==0)
        openBracketsStack.push(curSym);
        else if(lastOpenBracket==='7') openBracketsStack.pop();
      } else if(curSym === '8' ){
          var lastOpenBracket = openBracketsStack[openBracketsStack.length - 1];
        if(lastOpenBracket!='8' || i==0)
        openBracketsStack.push(curSym);
        else if(lastOpenBracket==='8') openBracketsStack.pop();
      
      } else if (curSym === ')' || curSym === ']' || curSym === '}' || curSym === '2' || curSym === '4' || curSym === '6') {
          if (openBracketsStack.length > 0) {
              if (curSym === ')') {
                  var lastOpenBracket = openBracketsStack[openBracketsStack.length - 1];
                  if (lastOpenBracket === '(') {
                      openBracketsStack.pop();
                  } else {
                      result = false;
                  }
              } else if (curSym === ']') { 
                  var lastOpenBracket = openBracketsStack[openBracketsStack.length - 1];
                  if (lastOpenBracket === '[') {
                      openBracketsStack.pop();
                  } else {
                      result = false;
                  }
              } else if (curSym === '}') {
                  var lastOpenBracket = openBracketsStack[openBracketsStack.length - 1];
                  if (lastOpenBracket === '{') {
                      openBracketsStack.pop();
                  } else {
                      result = false;
                  }
} else if (curSym === '2') { 
                  var lastOpenBracket = openBracketsStack[openBracketsStack.length - 1];
                  if (lastOpenBracket === '1') {
                      openBracketsStack.pop();
                  } else {
                      result = false;
                  }
              } else if (curSym === '4') {
                  var lastOpenBracket = openBracketsStack[openBracketsStack.length - 1];
                  if (lastOpenBracket === '3') {
                      openBracketsStack.pop();
                  } else {
                      result = false;
                  }
              } else if (curSym === '6') {
                  var lastOpenBracket = openBracketsStack[openBracketsStack.length - 1];
                  if (lastOpenBracket === '5') {
                      openBracketsStack.pop();
                  } else {
                      result = false;
                  }
              }
          } else {
              result = false;
          }
      }
  }
  
  if (openBracketsStack.length > 0) {
      result = false;
  }


  return(result);

}
