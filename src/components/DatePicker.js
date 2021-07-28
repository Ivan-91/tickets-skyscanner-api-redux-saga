import format from "date-fns/format";
import React from "react";
import frLocale from "date-fns/locale/ru";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_DATE } from '../redux/types'
import styled from "styled-components";
import picker from '../assets/picker.png'


class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, "d MMM yyyy", { locale: this.locale });
  }
}


const TextField = props => {
  return (
    <PickerFeild 
      onClick={props.onClick}
      onChange={props.onChange}
      onBlur={props.onBlur}>
    <Input
      {...props.inputProps}
      
      
      value={props.value}
      className="input"
      type="text"
      readOnly
      
    />
    <div>
        <img src={picker} alt='picker'/></div>
    </PickerFeild>
  );
};



function FlightDatePicker(props) {

    const dispatch = useDispatch()
    const {date} = useSelector(state => state.setDate)
    const handleDateChange = (val) => {
        dispatch({
            type: REQUEST_DATE,
            payload: val.toISOString().substring(0, 10)
        })
    }

  return (
    <MuiPickersUtilsProvider utils={LocalizedUtils} locale={frLocale}>
      <DatePicker
        
        clearable
        format="dd MMMM yyyy"
        value={date}
        onChange={val=>handleDateChange(val)}
        clearLabel="clear"
        cancelLabel="cancel"
        TextFieldComponent={props => TextField(props)}
      />
    </MuiPickersUtilsProvider>
  );
}

export default FlightDatePicker;


const PickerFeild = styled.div`
display: flex;
align-items: center;
cursor: pointer;


`
const Input = styled.input`
cursor: pointer;
position: relative;
width: 210px;
height: 28px;
font-weight: 500;
font-size: 25px;
line-height: 22px;
color: #1157A7;
border: 0;

`