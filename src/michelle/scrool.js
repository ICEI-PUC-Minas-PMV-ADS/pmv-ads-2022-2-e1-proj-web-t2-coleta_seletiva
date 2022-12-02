document.querySelector("item-carrossel")
.addEventListener("wheel", event= 0); 

    if(event.deltaY > 0)
    {
        event.target.scrollBy(300,0);

    } else{
        event.target.scrollBy(-300,0);
    }

