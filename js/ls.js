let user_emails = []
let email_input_field = document.getElementById("mail")

function register(){
    let email_input= email_input_field.value

    let user = {
        email: email_input
    }
    user_emails.push(user)
    localStorage.setItem("user_emails", JSON.stringify(user_emails))

    email_input_field.value = ''
}


let user_contact = []
let name_input_field = document.getElementById("name")
let email2_input_field = document.getElementById("emaill")
let pn_input_field = document.getElementById("pn")
let msg_input_field = document.getElementById("msg")

function contact(){
    let name_input = name_input_field.value
    let email2_input = email2_input_field.value
    let pn_input = pn_input_field.value
    let msg_input = msg_input_field.value
    
    let user = {
        name: name_input,
        email: email2_input,
        phone_number: pn_input,
        message: msg_input
    }
    user_contact.push(user)
    localStorage.setItem("user_contact", JSON.stringify(user_contact))

    name_input_field.value = ''
    email2_input_field.value = ''
    pn_input_field.value = ''
    msg_input_field.value = ''
}