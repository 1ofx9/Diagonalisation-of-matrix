// Author: @Subash Praveen Instagram: @sub._.praveen Github: @SUBASH2309

var math = require('./math')

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

    // Matrix of 2x2
    var tw_matrix = [[twr1c1, twr1c2], [twr2c1, twr2c2]];

    // to find Determinant of the matrix
    var twdet;
    twdet = math.det(tw_matrix);
    
    // to get eigen values and Eigen vectors
    var twev;
    twev = math.eigs(tw_matrix);

    // to find eigen values and eigen vectors

    // to seprate Eigen Vectors into X1, X2, X3

    // to be honest i don't even know what i did here :3, good luck figuring it out :D

    var twv1 = Object.values(twevectors[0]);
    var twv2 = Object.values(twevectors[1]);

    var twvx1ur = Object.values(twv1[1]);
    var twvx1a = math.round(twvx1ur[0], 2);
    var twvx1b = math.round(twvx1ur[1], 2);

    // For full values of X1
    console.log("X1\n");
    console.log(twvx1ur[0]);    
    console.log(twvx1ur[1]);   
    
    var twvx2ur = Object.values(twv2[1]);
    var twvx2a = math.round(twvx2ur[0], 2); 
    var twvx2b = math.round(twvx2ur[1], 2);
    
    // For full values of X2
    console.log("X2\n");
    console.log(twvx2ur[0]);    
    console.log(twvx2ur[1]);

    // to display output of 2x2
    twoutput = "\n\tDeterminant of the matrix = "+twdet+"\n\tEigen values ('λ') = "+math.round(Object.values(twevalues))+"\n\tEigen Vectors:\n\t\tX1 = {"+twvx1a+", "+twvx1b+"}"+"\n\t\tX2 = {"+twvx2a+", "+twvx2b+"}\n";
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

    // Matrix of 3x3 
    var th_matrix = [[thr1c1, thr1c2, thr1c3], [thr2c1, thr2c2, thr2c3], [thr3c1, thr3c2, thr3c3]];
    
    // to find Determinant of the matrix
    var thdet;
    thdet = math.det(th_matrix);
    
    // to find Eigen values and Eigen vectors
    var thev;
    thev = math.eigs(th_matrix);

    // to separate eigen values and eigen vectors
    var thevalues = thev.values; //Eigen values of 3x3
    var thevectors = thev.eigenvectors; //Eigen vectors of 3x3

    // to seprate Eigen Vectors into X1, X2, X3

    // to be honest i don't even know what i did here :3, good luck figuring it out :D

    var thv1 = Object.values(thevectors[0]);
    var thv2 = Object.values(thevectors[1]);
    var thv3 = Object.values(thevectors[2]);

    var thvx1ur = Object.values(thv1[1]);
    var thvx1a = math.round(thvx1ur[0], 2);
    var thvx1b = math.round(thvx1ur[1], 2);
    var thvx1c = math.round(thvx1ur[2], 2);

    // For full values of x1
    console.log("X1\n");
    console.log(thvx1ur[0]);
    console.log(thvx1ur[1]);
    console.log(thvx1ur[2]);
    
    var thvx2ur = Object.values(thv2[1]);
    var thvx2a = math.round(thvx2ur[0], 2);    
    var thvx2b = math.round(thvx2ur[1], 2);    
    var thvx2c = math.round(thvx2ur[2], 2);   
    
    // For full values of X2 
    console.log("X2\n");
    console.log(thvx2ur[0]);
    console.log(thvx2ur[1]);
    console.log(thvx2ur[2]);
    
    var thvx3ur = Object.values(thv3[1]);
    var thvx3a = math.round(thvx3ur[0], 2);
    var thvx3b = math.round(thvx3ur[1], 2);
    var thvx3c = math.round(thvx3ur[2], 2);

    // For full values of X3
    console.log("X3\n");
    console.log(thvx3ur[0]);
    console.log(thvx3ur[1]);
    console.log(thvx3ur[2]);
    
    // to display output of 3x3
    thoutput = "\n\tDeterminant of the matrix = "+thdet+"\n\tEigen values ('λ') = "+math.round(Object.values(thevalues))+"\n\tEigen Vectors:\n\t\tX1 = {"+thvx1a+", "+thvx1b+", "+thvx1c+"}"+"\n\t\tX2 = {"+thvx2a+", "+thvx2b+", "+thvx2c+"}"+"\n\t\tX3 = {"+thvx3a+", "+thvx3b+", "+thvx3c+"}\n";
    thoutbox.innerHTML = thoutput;
}