const menuChoose = () => {
    console.log('Which category would you like to?');
    console.log('==============================');
    console.log('1. Coffee');
    console.log('2. Drink');
    console.log('3. Food');
    let choice = prompt('Choose: ');
    
    switch(choice){
        case '1':
            console.log('Here are coffee lists: ');
            let coffee_list = ['Espresso','Americano','Cappuccino','Iced Latte','Mocha'];
            for(let i=0; i<coffee_list.length; i++){
                console.log(`\t ${i+1}. ${coffee_list[i]}`);
            }
            let coffee_choose = prompt('Which one would you like to?: ');
            for(let j=0; j<coffee_list.length; j++){
                if(coffee_choose === coffee_list[j]){
                    console.log(`You have ordered ${coffee_list[j]}`);
                }
            }
              
            break;
        case '2':

            break;
        case '3':

            break;
        default:

            break;
    }
};

// ------

let username_save = '';
let password_save = '';
while(true){
    console.log('Welcome to our Coffee Meet Love');
    let user = prompt('Are you a new customer? (Y/N)');
    if(user==='Y'){
        console.log('===============Create Account===============');
        let username_create = prompt('Enter Username: ');
        let password_create = prompt('Enter Password: ');
        let verify_pass = prompt('Please verify your password again: ');
        while(password_create !== verify_pass){
            verify_pass = prompt('Sorry! your verify password doesn\'t match with your password, please try again: ');            
        }
        username_save = username_create;
        password_save = password_create;
        console.log('Greate! You have been created account');
        console.log('welcome to your account');
        //need function
        menuChoose();
    }
    else if(user==='N'){
        console.log('===============Login Account===============');
        let username = prompt('Enter Username: ');
        let password = prompt('Enter Password: ');
        while(username !== username_save || password !== password_save){
            console.log('Sorry! Your username or password is incorrect, please try again.');
            username = prompt('Enter Username: ');
            password = prompt('Enter Password: ');
        }
        console.log('welcome to your account');
        //need function
        menuChoose();

    }else{
        console.log('Invalid');
        user = prompt('Are you a new customer? (Y/N)');
    }

}
