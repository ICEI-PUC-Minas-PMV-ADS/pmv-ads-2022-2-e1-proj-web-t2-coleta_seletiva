$(document).ready(function() {
    var botao = $('.bt1');
    var dropDown = $('.ul-redes');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
        })})

function vidInte(vidInte1) {
            document.getElementById("vidInte1").src = "https://www.youtube.com/embed/ZcymnW5NRYQ"
            var display = document.getElementById("vidInte1").style.display;
            if(display == "none"){
                document.getElementById("vidInte1").style.display = 'block';   
                document.getElementById("jogosQuiz1").style.display = 'none';
                document.getElementById("espaMake1").style.display = 'none';     
            }                    
            else{
                document.getElementById("vidInte1").style.display = 'none';
            }
        }   
function jogosQuiz() {
            document.getElementById("jogosQuiz1").src = "https://wordwall.net/pt/embed/28818da5e1c3439faa28f2d03c79fb2e?themeId=1&templateId=3&fontStackId=0"   
            var display = document.getElementById("jogosQuiz1").style.display;
            if(display == "none"){
                document.getElementById("jogosQuiz1").style.display = 'block';  
                document.getElementById("espaMake1").style.display = 'none';
                document.getElementById("vidInte1").style.display = 'none';      
            }                    
            else{
                document.getElementById("jogosQuiz1").style.display = 'none';
            } 
                }
function espaMake() {
            document.getElementById("espaMake1").src = "https://www.youtube.com/embed/SFMoPZwhgnw"
            var display = document.getElementById("espaMake1").style.display;
            if(display == "none"){
                document.getElementById("espaMake1").style.display = 'block';  
                document.getElementById("vidInte1").style.display = 'none';
                document.getElementById("jogosQuiz1").style.display = 'none';      
            }                    
            else{
                document.getElementById("espaMake1").style.display = 'none';
                
            }
        }
