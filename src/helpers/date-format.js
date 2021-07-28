
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatDate(d){
 var t = new Date(d);
 return t.getDate()+' '+monthNames[t.getMonth()]+', '+t.getFullYear();
}