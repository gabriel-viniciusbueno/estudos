function printForecast(arr){
  let forecast = ''
  for(let i = 0; i < arr.length; i++){
    forecast += `...${arr[i]}ºC in ${i + 1} days`
    
  }
  console.log(forecast)
}

const test1 = [17, 21, 23]
const test2 = [12, 5, -5, 0, 4]

printForecast(test1)
printForecast(test2)