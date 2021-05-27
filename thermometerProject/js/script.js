function thermometer(){
    let main = document.querySelector(".thermo");
    console.log(main);
    
    setTimeout(() => { 
    main.innerHTML= "<i class='fas fa-thermometer-empty'></i>";
    main.style.color = "#90ee90";
     }, 1000);
    
     setTimeout(() => { 
        main.innerHTML= "<i class='fas fa-thermometer-quarter'></i>";
        main.style.color = "#90ee90";
         }, 2000);
    
         setTimeout(() => { 
            main.innerHTML= "<i class='fas fa-thermometer-half'></i>";
            main.style.color = "orange";
             }, 3000);
    
     setTimeout(() => { 
        main.innerHTML= "<i class='fas fa-thermometer-three-quarters'></i>";
        main.style.color = "orange";
         }, 4000);
    
         setTimeout(() => { 
            main.innerHTML= "<i class='fas fa-thermometer-full'></i>";
            main.style.color = "red";
             }, 5000);
    
}
setInterval(thermometer, 5000);
