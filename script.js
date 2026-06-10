const form=document.querySelector('#formulaire')

form.addEventListener('submit',(e)=>{
 e.preventDefault()

 const nom=document.querySelector('#nom')
 const email=document.querySelector('#email')
 const password=document.querySelector('#password')

 if(nom.value.trim()===''){
 return alert('Veuillez entrer votre nom')
 }

 if(!email.value.includes('@')){
 return alert('Email invalide')
 }

 if(password.value.length<6){
 return alert('Le mot de passe doit contenir au moins 6 caractères')
 }

 alert('Formulaire envoyé avec succès')
 form.reset()
})