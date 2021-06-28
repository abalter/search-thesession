console.log("in script.js")

$('#search').on('click', function()
{
  var tune_name = $('#tunename').val();
  var tune_key = $('#tunemode').val();
  var tune_type = $('#tunetype').val();

  console.log("name:", tune_name, "mode:", tune_mode, "type:", tune_type);

  search_results.forEach(function(result)
  {
    // console.log("result", result);
    var ref = result.ref;
    // console.log("ref:", ref);

    var record = reverse_idx[ref];
    console.log("name", record.name, "type:", record.type, "mode:", record.mode);
  });

});


 
  // $.get(
  //   url, 
  //   function(data) 
  //   { 
  //       $('#code').text(data);
  //       $('#ok').text("ok");
  //       let tune_list = JSON.parse(data);
        
  //       global_idx = indexTuneList(tune_list);
  //       reverse_idx = getReverseIndex(tune_list);
  //       // console.log(global_idx);
        
  //   }, 
  //   'text'
  // );

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