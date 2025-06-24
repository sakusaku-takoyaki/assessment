'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');


function removeAllChildren(element) {
   while (element.firstChild) {
      element.removeChild(element.firstChild);
   }
} 
assessmentButton.onclick = () =>  {
   const userName = userNameInput.value;
   if (userName.length === 0) {
      return;
   }
   removeAllChildren(resultDivided);
   const header = document.createElement('h3');
   header.innerText = '診断結果';
   resultDivided.appendChild(header);
   const paragraph = document.createElement('p');
   const result = assessment(userName);
   paragraph.innerText = result;
   resultDivided.appendChild(paragraph);
}
const answers = [
   '{userName}のいいところは声です。{userName}の特徴的な声は皆をひきつけ、心に残ります。',
   '{userName}のいいところは目です。{userName}の特徴的な目’は皆をひきつけ、心に残ります。',
   '{userName}のいいところは鼻です。{userName}の特徴的な鼻は皆をひきつけ、心に残ります。',
   '{userName}のいいところは心です。{userName}の特徴的な優しさは皆をひきつけ、心に残ります。',
   '{userName}のいいところは全てです。{userName}の特徴的なオーラは皆をひきつけ、心に残ります。'
];



function assessment(userName) {
   let sumOfCharCode = 0;
      for (let i = 0; i < userName.length; i++) {
         sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
      }
      const index = sumOfCharCode % answers.length;
      let result = answers[index];
      result = result.replace(/\{userName\}/g, userName);
      return result;
}
console.assert(
   assessment('太郎') ==='太郎のいいところは決断力です。太郎が決断にいつも助けられています。',
   '診断結果の文言の特定部分を名前に置き換える処理が正しくありません。'
);
