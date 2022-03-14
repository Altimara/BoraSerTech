// 1) Descriptografar a seguinte mensagem usando aes256:
// SLSNLsMKtcBRhq2Ppyu4TYDxtVk2nZ4hQq7CMsRFbMamJQSGK4NBwA==
/*const aes256 = require('aes256');
const senha = 'letscode2022';

const mensagemDescriptografada = (
  aes256.decrypt(
    senha,
    'SLSNLsMKtcBRhq2Ppyu4TYDxtVk2nZ4hQq7CMsRFbMamJQSGK4NBwA==',
  )
);
console.log(mensagemDescriptografada);
*/

// 2) Criptografar a seguinte mensagem: Bora Node.js
const aes256 = require('aes256');
const senha = 'letscode2022';
const mensagem = 'Bora Node.js';

const mensagemCriptografada = aes256.encrypt(senha, mensagem);
console.log(mensagemCriptografada)  //criptou assim: 16EYLh9q1P1CklYwp3FyvOwKx5D3HInnKDCkLA==
