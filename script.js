var global_idx;
var reverse_idx;

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

function getReverseIndex(records)
{
  var idx = {};
  records.forEach(function(record)
  {
    var UID = record.tune_id;
    idx[UID] = record;
  });

  return idx;
}
 
 
 $(document).ready(function()
{
  var url = 'https://raw.githubusercontent.com/adactio/TheSession-data/main/json/tunes.json';

  var reverse_idx;

  $.get(
    url, 
    function(data) 
    { 
        $('#code').text(data);
        $('#ok').text("ok");
        let tune_list = JSON.parse(data);
        
        global_idx = indexTuneList(tune_list);
        reverse_idx = getReverseIndex(tune_list);
        // console.log(global_idx);
        
    }, 
    'text'
  );

  $('#search').on('click', function()
  {
    var tune_name = $('#tunename').val();
    // console.log("tune name:", tune_name);

    var search_results = global_idx.search(tune_name);
    // console.log("results:", search_results);

    search_results.forEach(function(result)
    {
      // console.log("result", result);
      var ref = result.ref;
      // console.log("ref:", ref);

      var record = reverse_idx[ref];
      console.log("name", record.name, "type:", record.type, "mode:", record.mode);
    });

  });

});
 


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


var str = "https://thesession.vercel.app/thesession?sql=select+*+from+tunes+where+name+like+%22%25wise+maid%25%22"
 
 


https://thesession.vercel.app/thesession.json?sql=select+*+from+tunes+where+name+like+%22%25wise+maid%25%22

https://thesession.vercel.app/thesession?sql=select+*+from+tunes+where+name+like+%22%25wise+maid%25%22]]

https://thesession.vercel.app/thesession.json?sql=select+*+from+tunes+where+name+like+%22%25wise+maid%25%22