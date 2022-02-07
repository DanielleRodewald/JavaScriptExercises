const hondaCrv = {
    mgp: "21/27 ",
    transmission: "Automatic ",
    bodyType: "SUV ",
    driveType: "4WD",
    engine: "4 Cyl 2.4 L"
};

function moreInfo() {
    document.getElementById("honda").innerHTML = (`This car is a ${hondaCrv.bodyType} it is a ${hondaCrv.driveType} 
with a ${hondaCrv.engine} engine, ${hondaCrv.transmission} transmission, and has ${hondaCrv.mgp} miles per gallon`);
}

const santaFe = {
    mgp: "17/23 ",
    transmission: "Automatic ",
    bodyType: "SUV ",
    driveType: "4WD",
    engine: "6 Cyl 3.3 L"
};

function moreInfo2() {
    document.getElementById("hyundai").innerHTML = (`This car is a ${santaFe.bodyType} it is a ${santaFe.driveType} 
with a ${santaFe.engine} engine, ${santaFe.transmission} transmission, and has ${santaFe.mgp} miles per gallon`);
}

const ford = {
    mgp: "20/27 ",
    transmission: "Automatic ",
    bodyType: "SUV ",
    driveType: "4WD",
    engine: "4 Cyl 2.0 L"
};

function moreInfo3() {
    document.getElementById("ford").innerHTML = (`This car is a ${ford.bodyType} it is a ${ford.driveType} 
with a ${ford.engine} engine, ${ford.transmission} transmission, and has ${ford.mgp} miles per gallon`);
}