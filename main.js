var typed= new Typed(".text",{
    strings:["Tractors","Fertilisers","Pesticides","Labourers"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});
function expandTab(tab) {
    // Remove the 'active' class from all tabs
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach((item) => {
        item.classList.remove('active');
    });

    // Add 'active' class to the clicked tab to make it bigger
    tab.classList.add('active');
}
