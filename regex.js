const pattern = /\/\/[a-zA-Z]{2,}\.[a-zA-Z]{2,3}/;
const url = 'https://google.com/users=corey'
const r = url.match(pattern)
console.log(r[0].slice(2))