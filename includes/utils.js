// learn more on https://docs.dataform.co/guides/includes/

function group_by(number){
  var string = "GROUP BY ";
  for(var i=1;i<=number;i++){
    string = string + i;
    if(i<number){
      string = string + ", ";
    }
  }
  return string;
}

module.exports = { group_by };