const menuChoose = () => {
    console.log('Which category would you like to?');
    console.log('==============================');
    console.log('1. Coffee');
    console.log('2. Drink');
    console.log('3. Food');
    console.log('4. Exit');
    let choice = prompt('Choose Item (1,2,3,4): ');
    
    switch(choice){
        case '1':
            console.log('Here are coffee lists: ');
            let coffee_list = ['Espresso: $2.4','Americano: $3.1','Cappuccino: $2.7','Iced Latte: $3.2','Mocha: $2.2'];
            
            for(let i=0; i<coffee_list.length; i++){
                console.log(`\t ${i+1}. ${coffee_list[i]}`);
            }
            
            let coffee_choose = prompt('Which one would you like to? (Word): ');
            for(let j=0; j<coffee_list.length; j++){
                if(coffee_choose === coffee_list[j]){
                    console.log(`You have ordered ${coffee_list[j]}`);
                }
            }
            let conti = prompt('Would you like to order more? (Y/N): ');
            if(conti === 'Y' || 'y'){
                menuChoose();
            }
            else{
                console.log('Have a nice day!');
            }

            break;
        case '2':
            console.log('Here are drink lists: ');
            let drink_list = ['Tea','Coca','Pepsi','Juice'];
            for(let i=0; i<drink_list.length; i++){
                 console.log(`\t ${i+1}. ${drink_list[i]}`);
            }
            let drink_choose = prompt('Which one would you like to? (Word): ');
            for(let j=0; j<drink_list.length; j++){
                if(drink_choose === drink_list[j]){
                    console.log(`You have ordered ${drink_list[j]}`);
                }
            }
            let conti2 = prompt('Would you like to order more? (Y/N): ');
            if(conti2 === 'Y' || 'y'){
                menuChoose();
            }
            else{
                console.log('Have a nice day!');
            }
            
            break;
        case '3':
            console.log('Here are Food lists: ');
            let food_list = ['Cookie','Bread','Pancake'];
            for(let i=0; i<food_list.length; i++){
                 console.log(`\t ${i+1}. ${food_list[i]}`);
            }
            let food_choose = prompt('Which one would you like to? (Word): ');
            for(let j=0; j<food_list.length; j++){
                if(food_choose === food_list[j]){
                    console.log(`You have ordered ${food_list[j]}`);
                }
            }
            let conti3 = prompt('Would you like to order more? (Y/N): ');
            if(conti3 === 'Y' || 'y'){
                menuChoose();
            }
            else{
                console.log('Have a nice day!');
            }
        
            break;
        case '4':
            console.log('Have a nice day!');
            break;
        default:
            console.log('You are out of number, please try again:)');
            choice = prompt('Choose Item (1,2,3,4): ');
            break;
    }
};

// ------

let username_save = '';
let password_save = '';

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


