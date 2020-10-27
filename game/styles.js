var declass = d3.select(".hide");
    declass.on("click",function() {
        declass.style("background-color","white");
                  });

var test1 = d3.select(".test1");

        test1.on("mouseenter",function() {
        
            test1.text("John Doe, 'It was the man in a White Spacesuit!'");
        
    })
             
        test1.on("mouseleave", function() {
        
            test1.text("John Doe");
    });   

var test2 = d3.select(".test2");

        test2.on("mouseenter",function() {
        
            test2.text("Charlie Williamson, 'It smelled of Baguettes!'");
        
    })
             
        test2.on("mouseleave", function() {
        
            test2.text("Charlie Williamson");
    });   

var test3 = d3.select(".test3");

        test3.on("mouseenter",function() {
        
            test3.text("Leon Louis III, 'Im innocent!'");
        
    })
             
        test3.on("mouseleave", function() {
        
            test3.text("Leon Louis III");
    });   

var john = d3.select(".john");
    john.on("click",function() {
        window.alert("John was apprehended but there was not sufficient evidence to convict, and the other two suspects have gone into hiding. Your Secret Agent liscense is under review, you have lost.");
    });

var charlie = d3.select(".charlie");
    charlie.on("click",function() {
        window.alert("Charlie Williamson has been apprehended. After his fingerprints were found at the scene, he admitted to framing Captain Leon Louis III for the crime. He claims he was attempting to kill John Doe for his, quote, 'Unbritish Ideals'. Good job agent, you win.");
    });

var louis = d3.select(".louis");
    louis.on("click",function() {
        window.alert("Leon Louis III has been apprehended, as the evidence all points to him. He refuses to admit guilt, still claiming his innocence. He says one of the other two have framed him. Both of the other suspects have gone into hiding so we cannot validate his claim, but we have enough to convict him. You won, agent... or did you? There may be a hint in the first paragraph of the page...");
    });

var secret1 = d3.selectAll(".secret1");
    secret1.on("dblclick",function() {
        secret1.style("background-color","black");
        secret1.style("color","purple");
    });
var secret2 = d3.selectAll(".secret2");
    secret2.on("dblclick",function() {
        secret2.style("background-color","black");
        secret2.style("color","purple");
    });
var secret3 = d3.selectAll(".secret3");
    secret3.on("dblclick",function() {
        secret3.style("background-color","black");
        secret3.style("color","purple");
    });
var secret4= d3.selectAll(".secret4");
    secret4.on("dblclick",function() {
        secret4.style("background-color","black");
        secret4.style("color","purple");
    });