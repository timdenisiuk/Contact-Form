export const validate = ({name, email, message}) => {

    //Errors object to be returned
    const errors = {}

    //if name is empty or is just a bunch of spaces
    if(!name || name.trim() === ''){
        errors.name = 'Name is requred';
    }

    //if email is empty or is just a bunch of spaces
    if(!email || email.trim() === ''){
        errors.email = 'Email is required'
    }

    //if email doesn't pass the email regular expression test
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        errors.email = 'Invalid email address';
    }

    //if message is empty or is just a bunch of spaces
    if(!message || message.trim() === ''){
        errors.message = 'Message is required'
    }

    return errors;
}