import axios from 'axios'


        const instanse = axios.create({
            baseURL: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/RUB/en-US/SVO-sky/JFK-sky/`,
            headers: {
              'x-rapidapi-key': 'b546b28e97mshdca28afb8ced52fp12d3d5jsn4661592318f8',
              'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
            }
          });

          
              
        //  export const nextWeekDate = ()=> {
        //    let currentDate=new Date();
        //   let nextWeekDate=new Date(currentDate);
        //   let myDate = nextWeekDate.setDate(nextWeekDate.getDate()+ 8)
        //    return myDate.toISOString().substring(0, 10)
        //   }

export const getPrices = (date = '2021-09-09') => instanse.get(date)

//'2021-07-05'
//'2021-07-05'