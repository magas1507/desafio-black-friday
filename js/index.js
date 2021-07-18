const form = document.getElementById('form');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  
  let data = {
    name, 
    email,
  }

  let dataConvert = JSON.stringify(data)

  localStorage.setItem('lead', dataConvert)

  let content = document.getElementById('content')

  let loading = "<p> Carregando </p>"
  
  let pronto = "<p> Pronto </p>"
  
  content.innerHTML = loading
 
  
  setTimeout(() => {
    content.innerHTML = pronto
  },1000)
})