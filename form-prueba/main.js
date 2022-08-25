const myForm = event =>{
    event.preventDefault()
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let contraseña = document.querySelector('.contraseña')
    const mailCont= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const formState=[]
    const validPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    

    !name.value ? name.classList.add('error'):
    formState.push( {element: 'nombre' ,value : name.value}) && name.classList.remove('error')

    !contraseña.value  || !contraseña.value.length > 6 || !contraseña.value.match(validPass) ? contraseña.classList.add('error') :
    formState.push({element:'contraseña', value : contraseña.value}) && contraseña.classList.remove('error')

    !email.value || !email.value.match(mailCont) ? name.classList.add('error'):
    formState.push({element:'email', value :email.value}) && email.classList.add('error')


    if ( formState.length ===3){
        const dato = document.getElementById('formA')
        dato.innerHTML = JSON.stringify(formState)
    }

}


