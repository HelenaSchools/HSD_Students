var mylist = $j('#std_information');
var listitems = mylist.children('li').get();
console.log(listitems);
console.log(mylist);
listitems.sort(function(a, b) {
   return ($j(a).innerText.To > $j(b).innerText) ? 1:-1;
})
$j.each(listitems, function(idx, itm) { mylist.append(itm); });