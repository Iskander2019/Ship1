var bag={};
$("document").ready(function(){
    loadSensors();

});

function loadSensors(){
   $.getJSON("goods.json", function(data){
        console.log(data);
        var out="";
        for(var key in data){
 //           console.log(data[key].type);
            out+="<div class='singleSensor'>";
            out+="<h3>"+data[key]['name']+"<br></h3>";
            out+="<p>"+data[key].type+"<br>"+"</p>";
            out+="<p>"+data[key].P+" Ватт<br>"+"</p>";
            out+="<img src='"+data[key].img+"' class='imgDat'><br>";
            out+="<button class='addBag' data-code='"+key+"'>Выбрать</button>";
            out+="</div>";
        }
        $("#dat").html(out); 
        $("button.addBag").on("click",addtoBag);       
   }) 
   function addtoBag(){
       var code=$(this).attr("data-code");

        if(bag[code]!=undefined)
            bag[code]++;
        else
            bag[code]=1;
   //     console.log(bag);
        var bagStr=JSON.stringify(bag);
        console.log(bagStr);
        localStorage.setItem("bag",bagStr);
        createAddWindow();
   }
}

function createAddWindow () {
    win=open("", "displayWindow", "width=500,height=450,status=no,menubar=no");
        var cab=localStorage.getItem("Dop");	
        win.document.open();
		win.document.write("<html><head><title>WIN</title></head>");
		win.document.write("<div id='ss1'>88888888</div>");
			
        win.document.write("<script>document.getElementById('ss1').innerHTML='3100000'</script>");
//		win.document.write("$('#dat').html(out);");		
		win.document.write("</body></html>");
        
}