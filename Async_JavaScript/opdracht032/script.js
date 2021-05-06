const vak = "";
const huisWerkMaken = function(vak, callback) {
    console.log("Ok, ok ik ga nu mijn ${vak} afmaken");
    callback();
};

const klaarMetHuisWerk = function () {
    setTimeout(() => {
        console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
    }, 2000);  
};

// huisWerkMaken("wiskunde", klaarMetHuisWerk)
const sinterklaasIsGul = true;

// Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
const krijgIkEenNieuweiPhone = new Promise(
    (resolve, reject) => {
        if (sinterklaasIsGul) {
            const smartphone = {
                merk: 'Apple',
                type: 'iPhone 11'
            };
            resolve(smartphone);
        } else {
            const metWelkeReden = new Error('Je bent stout geweest, geen cadeaus voor jou');
            reject(metWelkeReden);
        }

    }
);

// Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
const vraagAanSinterklaas = () => {
    krijgIkEenNieuweiPhone
        .then(function (resolved) {
            // yay, je hebt een nieuwe smartphone
            console.log(resolved);
        })
        .catch(function (error) {
            // oeps, geen Sinterklaas cadeau dit jaar
            console.log(error.message);
        });
}

vraagAanSinterklaas();