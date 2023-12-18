let username=document.getElementById('username');
let email=document.getElementById('email');
let number=document.getElementById('number');
let texrarea=document.getElementById('textarea');
flag=1
function validationform(){
    // if(username.value==''){
    //     let usererror=document.getElementById('usererror');
    //     usererror.innerHTML='Empty user id *'
    //     flag=0;
    // }
    // else if(username.value.length<3){
    //     let usererror=document.getElementById('usererror');
    //     usererror.innerHTML='atleast 2 character needed *'
    //     flag=0;
    // }
    // else{
    //     let usererror=document.getElementById('usererror');
    //     usererror.innerHTML=''
    //     flag=1;
    // }

    // if(email.value==''){
    //     let emailerror=document.getElementById('emailerror');
    //     emailerror.innerHTML='Empty email id *'
    //     flag=0;
    // }
    // else{
    //     let emailerror=document.getElementById('emailerror');
    //     emailerror.innerHTML=''
    //     flag=1;
    // }

    // if(number.value==''){
    //     let numbererror=document.getElementById('numbererror');
    //     numbererror.innerHTML='Empty number *'
    //     flag=0;
    // }
    // else{
    //     let numbererror=document.getElementById('numbererror');
    //     numbererror.innerHTML=''
    //     flag=1;
    // }

    // if(textarea.value==''){
    //     let textareaerror=document.getElementById('textareaerror');
    //     textareaerror.innerHTML='post your question *'
    //     flag=0;
    // }
    // else{
    //     let textareaerror=document.getElementById('textareaerror');
    //     textareaerror.innerHTML=''
    //     flag=1;
    // }
    if(username.value==''||email.value==''||number.value==''||textarea.value==''){
        if(username.value==''){
            let usererror=document.getElementById('usererror');
            usererror.innerHTML='Empty user id *'
            flag=0;
        }
        else if(username.value.length<3){
            let usererror=document.getElementById('usererror');
            usererror.innerHTML='atleast 3 character needed *'
            flag=0;
        }
        else{
            let usererror=document.getElementById('usererror');
            usererror.innerHTML=''
            flag=1;
        }
    
        if(email.value==''){
            let emailerror=document.getElementById('emailerror');
            emailerror.innerHTML='Empty email id *'
            flag=0;
        }
        else{
            let emailerror=document.getElementById('emailerror');
            emailerror.innerHTML=''
            flag=1;
        }
    
        if(number.value==''){
            let numbererror=document.getElementById('numbererror');
            numbererror.innerHTML='Empty number *'
            flag=0;
        }
        else{
            let numbererror=document.getElementById('numbererror');
            numbererror.innerHTML=''
            flag=1;
        }
    
        if(textarea.value==''){
            let textareaerror=document.getElementById('textareaerror');
            textareaerror.innerHTML='post your question *'
            flag=0;
        }
        else{
            let textareaerror=document.getElementById('textareaerror');
            textareaerror.innerHTML=''
            flag=1;
        }
        flag=0; 
    }
    else{
        flag=1;
    }

    if (flag){
        return true
    }
    else{
        return false
    }
}