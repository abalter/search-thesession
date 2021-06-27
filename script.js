var global_idx;

function indexTuneList(tune_list, id_field, search_term)
{
	var id_field = "tune_id";
  var search_term = "name"
  
  var idx = lunr(function ()
    {
      this.ref('tune_id');
      this.field('name');

  /*     for (field in tune_fields)
      {
        this.field(field)
      } */

      tune_list.forEach(function (doc) 
        {
          this.add(doc)
        }, 
        this
      )
    });
    
	return idx;

}
 
 
 $(document).ready(
   function()
   {
      var url = 'https://raw.githubusercontent.com/adactio/TheSession-data/main/json/tunes.json';

      $.get(
        url, 
        function(data) 
        { 
            $('#code').text(data);
            $('#ok').text("ok");
            let tune_list = JSON.parse(data);
            
            global_idx = indexTuneList(tune_list);
            console.log(global_idx);
        }, 
        'text'
      );

   }
 );
 


var tune_fields = 
[
	"tune_id", 
  "setting_id", 
  "name", 
  "type",
  "meter", 
  "mode", 
  "abc", 
  "date", 
  "username"
];


 
 
 
