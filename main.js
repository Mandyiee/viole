
 
let decrypt = document.querySelector('.decr');
let encrypt = document.querySelector('.encr');
let decode =document.getElementById('de');
let encode =document.getElementById('en');
decode.addEventListener('click', () => {
  window.open('decode.html','_self')
})
encode.addEventListener('click', () => {
  window.open('encode.html','_self')
})
encrypt.addEventListener('click', () => {
  window.open('encrypt.html','_self')
})
decrypt.addEventListener('click', () => {
  window.open('decrypt.html','_self')
})