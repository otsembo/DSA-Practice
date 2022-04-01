// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/solutions/javascript

function queueTime(customers, n) {
    if(n < 2){
        return customers.reduce((a,b) => a+b, 0);
    }else{

        if(customers.length <= n){
            return Math.max(...customers)
        }


        const tills = [];
        for(let i = 0; i < n; i++){
            tills[i] = 0;
        }


        for(let i = 0; i < customers.length; i++){
            const shortestTime = tills.indexOf(Math.min(...tills));
            tills[shortestTime] += customers[i];

        }

        return Math.max(...tills);

    }
}