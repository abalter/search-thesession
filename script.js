console.log("in script.js")

$('#search').on('click', function()
{
  var tune_name = $('#tunename').val();
  var tune_mode = $('#tunemode').val();
  var tune_type = $('#tunetype').val();

  console.log("name:", tune_name, "mode:", tune_mode, "type:", tune_type);

  sql = `select+*+from+tunes+where+name+like+%22%25${tune_name}%25%22+and+mode+like+%22%25${tune_mode}%25%22+and+type+like+%22%25${tune_type}%25%22`
  sql = `select+*+from+tunes+where+name+like+"%${tune_name}%"+and+mode+like+"${tune_mode}"+and+type+like+"${tune_type}"`
  
  encoded_sql = encodeURI(sql);
  console.log("raw sql", sql);
  console.log("encoded sql: ", encoded_sql);

  query_url = "https://thesession.vercel.app/thesession.json?sql=" + encoded_sql
  console.log(query_url);

  $.get(
    query_url, 
    function(data) 
    { 
      let all_results = JSON.parse(data);
      let tune_list = all_results['rows'];
      let results_text = JSON.stringify(tune_list, null, 2);
      console.log(results_text);
      $('#abc').text(results_text);
      $('#ok').text("ok");
        
    }, 
    'text'
  );
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
 
 


// https://thesession.vercel.app/thesession.json?sql=select+*+from+tunes+where+name+like+%22%25wise+maid%25%22

// https://thesession.vercel.app/thesession?sql=select+*+from+tunes+where+name+like+%22%25wise+maid%25%22]]

// https://thesession.vercel.app/thesession.json?sql=select+*+from+tunes+where+name+like+%22%25wise+maid%25%22