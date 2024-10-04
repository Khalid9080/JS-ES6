

/*   ----- try() catch() block ------

--> jodi emn hoe j je kono ekta function a error thake tahole, othoba shondeho jonok mne hoe,
    tahole amra shetake try() er moddhe rakhte pari.
--> code tae jodi kno vul thake tahole vul portion tuku try() er moddhe rakha hobe.
--> jei portion tuku code thik ase oita sudhu tahole run korbe 


*/

function checkAge() {
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');



    try {
        //console.log(bBaria)

        const age = parseInt(ageText);
        if (isNaN(age)) {
            //console.log('Age is not a number',age,ageText);
            throw ' Age is not a number';
        }
        else if (age < 18) {
            throw ' You are under 18';
        }
        // if valid then make it clean/empty
        errorTag.innerHTML = '';

    }

    catch (err) {
        console.log('Error dhora porse:', err);
        errorTag.innerHTML = 'Somthing Wrong' + err;
    }

    // finally() -- last a must execute hobe.
    finally {
        console.log('Finally function works, try catch done');
    }

    console.log(1111)
}