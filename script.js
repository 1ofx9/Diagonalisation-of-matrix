// Author: @Subash Praveen Instagram: @sub._.praveen Github: @SUBASH2309

const { math } = require("./math");

// visibility of cells 3x3
function three() {
    document.getElementById('threer1c1').style.visibility = "visible";    
    document.getElementById('threer1c2').style.visibility = "visible";    
    document.getElementById('threer1c3').style.visibility = "visible";    
    document.getElementById('threer2c1').style.visibility = "visible";    
    document.getElementById('threer2c2').style.visibility = "visible";    
    document.getElementById('threer2c3').style.visibility = "visible";    
    document.getElementById('threer3c1').style.visibility = "visible";    
    document.getElementById('threer3c2').style.visibility = "visible";    
    document.getElementById('threer3c3').style.visibility = "visible";        
    document.getElementById('input-box-bg-3x3').style.visibility = "visible";        
    document.getElementById('input-matrix-text-3x3').style.visibility = "visible";        
    document.getElementById('cal3').style.visibility = "visible";        
    document.getElementById('cal2').style.visibility = "hidden";        
    document.getElementById('input-matrix-text-2x2').style.visibility = "hidden";        
    document.getElementById('input-box-bg-2x2').style.visibility = "hidden";
    document.getElementById('twor1c1').style.visibility = "hidden";
    document.getElementById('twor1c2').style.visibility = "hidden";
    document.getElementById('twor2c1').style.visibility = "hidden";
    document.getElementById('twor2c2').style.visibility = "hidden";
    document.getElementById('end').style.visibility = "hidden";
}

// visibility of cells 2x2
function two() {
    document.getElementById('twor1c1').style.visibility = "visible";
    document.getElementById('twor1c2').style.visibility = "visible";
    document.getElementById('twor2c1').style.visibility = "visible";
    document.getElementById('twor2c2').style.visibility = "visible";
    document.getElementById('input-box-bg-2x2').style.visibility = "visible";        
    document.getElementById('input-matrix-text-2x2').style.visibility = "visible";        
    document.getElementById('cal2').style.visibility = "visible";        
    document.getElementById('input-matrix-text-3x3').style.visibility = "hidden";
    document.getElementById('cal3').style.visibility = "hidden";
    document.getElementById('input-box-bg-3x3').style.visibility = "hidden";
    document.getElementById('threer1c1').style.visibility = "hidden";
    document.getElementById('threer1c2').style.visibility = "hidden";
    document.getElementById('threer1c3').style.visibility = "hidden";
    document.getElementById('threer2c1').style.visibility = "hidden";
    document.getElementById('threer2c2').style.visibility = "hidden";
    document.getElementById('threer2c3').style.visibility = "hidden";
    document.getElementById('threer3c1').style.visibility = "hidden";
    document.getElementById('threer3c2').style.visibility = "hidden";
    document.getElementById('threer3c3').style.visibility = "hidden";
    document.getElementById('end').style.visibility = "hidden";
}

function calculate2() {
    // output box
    const twoutbox = document.getElementById('textarea');
    // row1
    var twr1c1 = document.getElementById("twor1c1").value;
    var twr1c2 = document.getElementById("twor1c2").value;
    // row2
    var twr2c1 = document.getElementById("twor2c1").value;
    var twr2c2 = document.getElementById("twor2c2").value;

    // to find Determinant of the matrix
    var twdet;
    twdet = (twr1c1 * twr2c2)-(twr1c2 * twr2c1)
    
    // to get eigen values
    var twev;
    twev = math.eigs([[twr1c1, twr1c2], [twr2c1, twr2c2]], {eigenvectors: false}); //outputs dict containing only eigenvalues as 'values'

    // to display output
    twoutput = "\n\tDeterminant of the matrix = "+twdet+"\n\tEigen values ('λ') = "+math.round(Object.values(twev))+"\n\tEigen Vectors = "; //this only displays eigen values
    twoutbox.innerHTML = twoutput;
}

function calculate3() {
    // output box
    const thoutbox = document.getElementById('textarea');
    // row1
    var thr1c1 = document.getElementById("threer1c1").value;
    var thr1c2 = document.getElementById("threer1c2").value;
    var thr1c3 = document.getElementById("threer1c3").value;
    // row2
    var thr2c1 = document.getElementById("threer2c1").value;
    var thr2c2 = document.getElementById("threer2c2").value;
    var thr2c3 = document.getElementById("threer2c3").value;
    // row3
    var thr3c1 = document.getElementById("threer3c1").value;
    var thr3c2 = document.getElementById("threer3c2").value;
    var thr3c3 = document.getElementById("threer3c3").value;

    // to find Determinant of the matrix
    var thdet;
    thdet = (thr1c1 * thr1c2 * thr1c3) + (thr2c1 * thr3c2 * thr1c3) + (thr3c1 * thr1c2 * thr2c3) - (thr1c3 * thr2c2 * thr3c1) - (thr2c3 * thr3c2 * thr1c1) - (thr3c3 * thr1c2 * thr2c1);

    // to find Eigen values
    var thev;
    thev = math.eigs([[thr1c1, thr1c2, thr1c3], [thr2c1, thr2c2, thr2c3], [thr3c1, thr3c2, thr3c3]], {eigenvectors : false});


    // to display output
    thoutput = "\n\tDeterminant of the matrix = "+thdet+"\n\tEigen values ('λ') = "+math.round(Object.values(thev))+"\n\tEigen Vectors = "; //this only displays eigen values for now....
    thoutbox.innerHTML = thoutput;

}