/**
 * primitive means that it is nonempty and you cannot split it such that you can fix using concatenation.
 * So it is just removing outer parentheses but how do you detect that anyways?
 * Maybe I can keep a track of the number of occurances for left and right parentheses. If the count becomes equal, then we know the indices to remove and reset the count until end of string.
 * I know that I have to traverse the string anyways. Maybe a forEach since I don't plan on returning anything directly inside it.
 */


let removeOuterParentheses = function(S) {
  let leftCount = 0;
  let rightCount = 0;
  let removeIndexCollection = [];
  let leftIndex = 0;

  sArray = Array.from(S);

  S.forEach((character, index) => {
    character === '(' ? leftCount += 1 : rightCount += 1;
    if (leftCount === rightCount) {
      // Then we have an outer pair so we need to remove them. But how do we identify?
      removeIndexCollection.push(leftIndex);
      removeIndexCollection.push(index); // The right parentheses index

      // Update now...
      leftCount = 0;
      rightCount = 0;

      if (S[index + 1] !== undefined) {
        leftIndex = index + 1;
        // Regular index is updated.
      }
    }
  });

  // Okay now we have the indices that we have to remove but we have to work backwords to avoid messing the order up.

  console.log(removeIndexCollection);

  let innerPara = '';

  for (let i = 0; i < S.length; i += 1) {
    if (!removeIndexCollection.includes(i)) {
      innerPara += S[i];
    }
  }

  console.log(innerPara);

  return innerPara;
};  


// var removeOuterParentheses = function(S) {
//   let res = []; //string buffer
//   let tmpCnt =0;
//   let tmpStr = '';
//   for(const c of S){
//       if(c ==='('){
//           ++tmpCnt
//       } else if(c ===')'){
//           --tmpCnt;
//       }
//       tmpStr +=c;
//       if(tmpCnt ===0){
//           res.push(tmpStr.substring(1, tmpStr.length-1));
//           tmpStr='';
//       }
      
//   }
//   return res.join('');
  
// };

