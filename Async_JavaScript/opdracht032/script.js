const huisWerkMaken = function(vak, callback) {
    console.log("Ok, ok ik ga nu mijn", (vak), "afmaken");
    callback();
};

const klaarMetHuisWerk = function () {
    setTimeout(() => {
        console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
    }, 2000);  
};

huisWerkMaken("wiskunde", klaarMetHuisWerk);