jQuery(function ($) {
   function calcTime(offset, current_time) {
      // creo un oggetto Date per l'orario inserito 
      d = new Date(current_time);

      // lo converto in millisecondi
      utc = d.getTime();

      // creo un altro oggetto Date aggiungedo la differenza di orario della citta' del computer
      nd = new Date(utc + (3600000 * offset));
      // creo una string per visualizzare l'offeset a schermo
      if (offset > 0)
         string_offeset = ' (GMT +' + offset + ')';
      else
         string_offeset = ' (GMT ' + offset + ')';

      var month = nd.getMonth() + 1;
      var day = nd.getDate();
      var year = nd.getFullYear();
      var hour = nd.getHours();
      var minute = nd.getMinutes();

      // retorna la data come stringa
      return appendLeadingZeroes(day) + "/" + appendLeadingZeroes(month) + "/" + year + " " + appendLeadingZeroes(hour) + ":" + appendLeadingZeroes(minute) + string_offeset;
   }

   // questa funzione aggiunge uno zero quando e' necessario
   function appendLeadingZeroes(n) {
      if (n <= 9) {
         return "0" + n;
      }
      return n;
   }

   $(".span-datetime").each(function () {
      var current_time = $(this).text();
      // se il contenuto e' un orario accettato
      if (Date.parse(current_time)) {
         // calcolo l'offset del computer
         var hrs_offset = -(new Date().getTimezoneOffset() / 60);
         var new_time = calcTime(hrs_offset, current_time);
         $(this).text(new_time);
      }
   });
});