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
  //      console.log(bagStr);
        localStorage.setItem("bag",bagStr);
        createAddWindow();
   }
}

function createAddWindow () {
    win=open("", "displayWindow", "width=700,height=450,status=no,menubar=no");
        	
        win.document.open();
		win.document.write("<html><head><title>WIN</title>");
        win.document.write('<script type="text/javascript" src="../jQuery/jquery-3.3.1.min.js"></script>');
        win.document.write('<link rel="stylesheet" type="text/css" href="shop1.css"/>');
        win.document.write("</head>");
        win.document.write("<h2>Выбрано датчиков</h2>");
        win.document.write("<div id='out1'>88888888</div>");
        win.document.write("<div id='out2'>444444444</div>");
        win.document.write("<script>");	
        win.document.write("var basket = {};");                    // корзина куда собираются датчики	
        win.document.write("basket=localStorage.getItem('bag');"); 
        win.document.write("var cart=JSON.parse(basket);");
        win.document.write("$.getJSON('goods.json', function(data){");	
        win.document.write("var sensors=data;");                // Все датчики в файле JSON
        win.document.write("var out='';");
        win.document.write("for(var key in cart) {");
        win.document.write("out+='<p>'+sensors[key].name;");                // Имя датчика
        win.document.write("out+='<img src='+sensors[key].img+'>';");       // фото датчика    
        win.document.write("out+='--'+sensors[key].P;");                    // мощность
        win.document.write("out+='=='+cart[key]+'</p>';");                  // кол-во
        win.document.write("out+='<br><hr>';");
        win.document.write("$('#out1').html(out);");	
        win.document.write("}"+"});");	
 //      win.document.write("$('#out1').html(basket);");	
        win.document.write("$('#out2').html(basket);");		
        win.document.write("function showBasket(){;"); 
        win.document.write("};");	 
        win.document.write("</script>");
		win.document.write("</body></html>");
}



function clearBox(event){
    localStorage.setItem("bag", "");
    createAddWindow();
}



//       win.document.write("document.getElementById('ss1').innerHTML=cab");