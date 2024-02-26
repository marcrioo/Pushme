function updateDateTime() {            
 var datetimeElement = document.getElementById('datetime'); 
                         if (datetimeElement) {                
                          var now = new Date();                 var dateTimeString = 
                          now.toLocaleString();                 datetimeElement.textContent = "" + dateTimeString;             }         }          updateDateTime();         setInterval(updateDateTime, 1000);
