function generatedpassword(length, includelowercase, includeuppercase, includenums, includesymbols){
       const lowercasechar = `abcdefghijklmnopqrstuvwxyz`;
       const uppercasechar = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
       const numchar = `0123456789`;
       const symbolchar = `!@#$%^&*()_+-=":>?`;

       let allowedchar ="";
       let password = "";

       allowedchar += includelowercase ? lowercasechar : "";
       allowedchar += includeuppercase ? uppercasechar : "";
       allowedchar += includenums ? numchar : "";
       allowedchar += includesymbols ? symbolchar : "";

       if(length <= 7){
        return `(password lenght must be atleast 8)`;
       }
                     
       if(allowedchar.length === 0){
        return `(At least 1 set of character needs to be selected)`;
       }

       for(let i = 0; i < length; i++){
        const randomindex = Math.floor(Math.random() * allowedchar.length);
        password += allowedchar[randomindex];
       }
    
       return password;
}

const passwordLength = 14;
const includelowercase = true;
const includeuppercase = true;
const includenums = true;
const includesymbols = true;

const password = generatedpassword(passwordLength, 
                                   includelowercase, 
                                   includeuppercase, 
                                   includenums, 
                                   includesymbols);

console.log(`Generated Password : ${password}`);