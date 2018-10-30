var colors = ['#123', 'sefsf', 'wedsf', 'sefesf'];

var data = ['news1', 'news2', 'news3', 'news4', 'news5', 'news6', 'news7', 'news8', 'news9', 'news10', 'news11']

console.log(colors.length);
var finalData = [];
for (var i = 0; i < data.length; i++) {
    console.log(finalData.length +'--'+data.length);
    if (finalData.length >= data.length) {
        console.log('inside if')
        break;
    }
for(var t=0;t<colors.length;t++){
    finalData.push(colors[t]);
}
   // finalData.push(colors);
}
console.log(finalData);