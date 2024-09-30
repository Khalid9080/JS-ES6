
/* 
--> Filter korbo shorto onushare jodi condition true/fulfill hoy tahole oi element ta nibe.
--> jara condition true tara sob gula ekta array banaia nibe.
*/

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const players = [75, 56, 32, 98, 67, 26, 45, 98]
const friends =['Rakib','Rahi','Rafi','Rah','Raha']

const selected = players.filter(n => n > 50); // 50 er upore jara ase oder elemts dekhabe
console.log(selected);

const odd = number.filter(n => n % 2 != 0); // jara odd tara dekhabe
console.log(odd);

const friend= friends.filter(frnd => frnd.length<5) // character 5 er kom jegulo
console.log(friend);