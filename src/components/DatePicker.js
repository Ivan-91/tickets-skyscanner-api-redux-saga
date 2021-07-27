import format from "date-fns/format";
import React, { useState } from "react";
import frLocale from "date-fns/locale/ru";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_DATE, SET_DATE} from '../redux/types'
//import { changeDate, requestDate, requestPrices } from "../redux/priceReducer";

class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, "d MMM yyyy", { locale: this.locale });
  }
}

function FlightDatePicker(props) {

    const dispatch = useDispatch()
    const {date:date} = useSelector(state => state.setDate)
    const handleDateChange = (val) => {
        dispatch({
            type: REQUEST_DATE,
            payload: val.toISOString().substring(0, 10)
        })
        console.log(val.toISOString().substring(0, 10), 'date in datepicker')
        const today = new Date
    }
  //const [selectedDate, setselectedDate] = useState(new Date());
  console.log(date)

  return (
    <MuiPickersUtilsProvider utils={LocalizedUtils} locale={frLocale}>
      <DatePicker
        clearable
        //helperText="Localization done right"
        format="dd MMMM yyyy"
        value={date}
        onChange={val=>handleDateChange(val)}
        clearLabel="clear"
        cancelLabel="cancel"
      />
    </MuiPickersUtilsProvider>
  );
}

export default FlightDatePicker;