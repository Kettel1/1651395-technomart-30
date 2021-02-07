function openTab(evt, cityName) {
    var i, services_content, services__inner_btn;
    services_content = document.getElementsByClassName("services_content");
    for (i = 0; i < services_content.length; i++) {
        services_content[i].style.display = "none";
    }

    services__inner_btn = document.getElementsByClassName("services__inner_btn");
    for (i = 0; i < services__inner_btn.length; i++) {
        services__inner_btn[i].className = services__inner_btn[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
}
document.getElementById("defaultOpen").click();