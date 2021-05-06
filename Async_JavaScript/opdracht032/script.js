const huisWerkMaken = function(vak, callback) {
    console.log("Ok, ok ik ga nu mijn ${vak} af maken");
    callback();
};

const klaarMetHuisWerk = function () {
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
};

vak = "wiskunde"
huisWerkMaken(vak, klaarMetHuisWerk);
console.log("test");