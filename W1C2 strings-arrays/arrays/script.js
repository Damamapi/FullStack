function ex(s) {
    let arr = s.split(" ");
    console.log(countWords(arr));
    // console.log(arr.length);
    let r = "";
    for(let i = 0; i < arr.length; i++) {
        // console.log("r, capitalL(arr[i])");
        r += (reverseString(capitalL(arr[i])) + " ");
    }
    // console.log("after");v 
    return r;
}

function countWords(s) {
    let r = [];
    for(string of s) {
        
        if(r[string] == undefined) {
            r[string] = 1;
        } else {
            r[string]++;
        }
    }
    return r;
}

function reverseString(s) {
    //str to arr - split / arr to str - join

    // let arr = s.split('');
    // let r = "";
    // for(let i = arr.length - 1; i >= 0; i--) {
    //     r += arr[i];
    // }
    // return r;

    return s.split('').reverse().join('');
}

function capitalF(s) {
    return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
}

function capitalL(s) {
    return s.substr(0, s.length - 1).toLowerCase() + s.charAt(s.length - 1).toUpperCase();
}