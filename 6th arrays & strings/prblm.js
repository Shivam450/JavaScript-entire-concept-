const numbers = [5,6,7,8,9]// here we give array as input and we want sum of array as output
let sum = 0; //here we declared that ouptu will  
for (let i=0; i<numbers.length; i++)/*here i =0 to array.length*/{
    sum += numbers[i];// here 
}
console.log(sum)

for (let i=0; i<numbers.length; i++){
    if(numbers[i]>i){
        console.log(numbers[i])
    }
}