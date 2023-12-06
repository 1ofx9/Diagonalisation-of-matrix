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
    var twevalues = twev.values;
    var twevectors = twev.eigenvectors;

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
    console.log("-----")
    
    var twvx2ur = Object.values(twv2[1]);
    var twvx2a = math.round(twvx2ur[0], 2); 
    var twvx2b = math.round(twvx2ur[1], 2);
    
    // For full values of X2
    console.log("X2\n");
    console.log(twvx2ur[0]);    
    console.log(twvx2ur[1]);
    console.log("-----")

    // to find the transpose of 2x2 matrix
    var tw_transpose_matrix = Object.values(math.transpose(tw_matrix));
    var tw_transpose_r1 = tw_transpose_matrix[0];
    var tw_transpose_r2 = tw_transpose_matrix[1];
    var tw_transpose_r3 = tw_transpose_matrix[2];

    console.log("Transpose Of Matrix")
    console.log(tw_transpose_r1)
    console.log(tw_transpose_r2)    
    console.log(tw_transpose_r3)
    console.log("-----") 

    // to find whether the matrix is symmetric or skew-symmetric
    var tw_matrix_type;
    var tw_matrix_chk = JSON.stringify(tw_matrix);
    var tw_transpose_matrix_chk = JSON.stringify(tw_transpose_matrix);

    if (tw_matrix_chk == tw_transpose_matrix_chk) {
        tw_matrix_type = "The Matrix is Symmetric i.e (A is equal to A*)";
    } else {
        tw_matrix_type = "The Matrix is Skew-Symmetric i.e (A is not equal to A*)";
    }

    console.log(tw_matrix_type)
    console.log("-----")

    // to display output of 2x2
    twoutput = "\n\tDeterminant of the matrix = "+twdet+"\n\n\t"+tw_matrix_type+"\n\n\tEigen values ('λ') = "+math.round(Object.values(twevalues))+"\n\n\tEigen Vectors:\n\t\tX1 = {"+twvx1a+", "+twvx1b+"}"+"\n\t\tX2 = {"+twvx2a+", "+twvx2b+"}\n";
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
    console.log("-----")
    
    var thvx2ur = Object.values(thv2[1]);
    var thvx2a = math.round(thvx2ur[0], 2);    
    var thvx2b = math.round(thvx2ur[1], 2);    
    var thvx2c = math.round(thvx2ur[2], 2);   
    
    // For full values of X2 
    console.log("X2\n");
    console.log(thvx2ur[0]);
    console.log(thvx2ur[1]);
    console.log(thvx2ur[2]);
    console.log("-----")
    
    var thvx3ur = Object.values(thv3[1]);
    var thvx3a = math.round(thvx3ur[0], 2);
    var thvx3b = math.round(thvx3ur[1], 2);
    var thvx3c = math.round(thvx3ur[2], 2);

    // For full values of X3
    console.log("X3\n");
    console.log(thvx3ur[0]);
    console.log(thvx3ur[1]);
    console.log(thvx3ur[2]);
    console.log("-----")

    // to find the transpose of 3x3 matrix
    var th_transpose_matrix = Object.values(math.transpose(th_matrix));
    var th_transpose_r1 = th_transpose_matrix[0];    
    var th_transpose_r2 = th_transpose_matrix[1];
    var th_transpose_r3 = th_transpose_matrix[2];

    console.log("Transpose Of Matrix")
    console.log(th_transpose_r1)
    console.log(th_transpose_r2)    
    console.log(th_transpose_r3)
    console.log("-----")

    // to find whether the matrix is symmetric or skew-symmetric
    var th_matrix_type;
    var th_matrix_chk = JSON.stringify(th_matrix);
    var th_transpose_matrix_chk = JSON.stringify(th_transpose_matrix);

    if (th_matrix_chk == th_transpose_matrix_chk) {
        th_matrix_type = "The Matrix is Symmetric i.e (A is equal to A*)";
        var dia_ns = 0;
        
    } else {
        th_matrix_type = "The Matrix is Skew-Symmetric i.e (A is not equal to A*)";
        var dia_ns = 1;
    }

    console.log(th_matrix_type)
    console.log("-----")

    // to find the inverse of eigen vectors using inverse method
    var th_ev_x1 = thv1[1];
    var th_ev_x2 = thv2[1];
    var th_ev_x3 = thv3[1];

    // Eigen vectors of 3x3
    //      |a11|      |b11|      |c11|
    // x1 = |a21| x2 = |b21| x3 = |c21|
    //      |a31|      |b31|      |c31|
    
    //         |a11, b11, c11|
    // mat_b = |a21, b21, c21|
    //         |a31, b31, c31|
    
    // this below line of code does exactly what is given above :)
    var mat_b =[[th_ev_x1[0], th_ev_x2[0], th_ev_x3[0]], [th_ev_x1[1], th_ev_x2[1], th_ev_x3[1]], [th_ev_x1[2], th_ev_x2[2], th_ev_x3[2]]] 
    var inv_mat_b = math.inv(mat_b);
    
    
    if (dia_ns == 0) { //symmetric
        console.log("Normalised Matrix and Diagonalised Matrix")

        var diagonalised_mat = math.multiply(inv_mat_b, th_matrix, mat_b);
        
        // to round and display Diagonalised Matrix
        var diagonalised_mat_r1 = Object.values(diagonalised_mat[0]);
        var diagonalised_mat_r2 = Object.values(diagonalised_mat[1]);
        var diagonalised_mat_r3 = Object.values(diagonalised_mat[2]);

        var dia_matr1_a11 = math.round(diagonalised_mat_r1[0]);
        var dia_matr1_a12 = math.round(diagonalised_mat_r1[1]);
        var dia_matr1_a13 = math.round(diagonalised_mat_r1[2]);
        var dia_matr1_a1 = [dia_matr1_a11, dia_matr1_a12, dia_matr1_a13];


        var dia_matr2_a21 = math.round(diagonalised_mat_r2[0]);
        var dia_matr2_a22 = math.round(diagonalised_mat_r2[1]);
        var dia_matr2_a23 = math.round(diagonalised_mat_r2[2]);
        var dia_matr1_a2 = [dia_matr2_a21, dia_matr2_a22, dia_matr2_a23];

        var dia_matr3_a31 = math.round(diagonalised_mat_r3[0]);
        var dia_matr3_a32 = math.round(diagonalised_mat_r3[1]);
        var dia_matr3_a33 = math.round(diagonalised_mat_r3[2]);
        var dia_matr1_a3 = [dia_matr3_a31, dia_matr3_a32, dia_matr3_a33];

        // Normalized Matrix

        
        thoutput = "\n\tDeterminant of the matrix = "+thdet+"\n\n\t"+th_matrix_type+"\n\n\tEigen values ('λ') = "+math.round(Object.values(thevalues))+"\n\n\tEigen Vectors:\n\t\tX1 = ["+thvx1a+", "+thvx1b+", "+thvx1c+"]"+"\n\t\tX2 = ["+thvx2a+", "+thvx2b+", "+thvx2c+"]"+"\n\t\tX3 = ["+thvx3a+", "+thvx3b+", "+thvx3c+"]"+"\n\n\tNormalised Matrix (N):"+"\n\n\tDiagonalized Matrix (D):"+"\n\t\t|"+dia_matr1_a1+"|"+"\n\t\t|"+dia_matr1_a2+"|"+"\n\t\t|"+dia_matr1_a3+"|";
        thoutbox.innerHTML = thoutput;

    } else if (dia_ns == 1){ //skew-symmetric
        console.log("Inverse Of Matrix and Diagonalised Matrix")

        var diagonalised_mat = math.multiply(inv_mat_b, th_matrix, mat_b);
        
        // to round and display Diagonalised Matrix
        var diagonalised_mat_r1 = Object.values(diagonalised_mat[0]);
        var diagonalised_mat_r2 = Object.values(diagonalised_mat[1]);
        var diagonalised_mat_r3 = Object.values(diagonalised_mat[2]);

        var dia_matr1_a11 = math.round(diagonalised_mat_r1[0]);
        var dia_matr1_a12 = math.round(diagonalised_mat_r1[1]);
        var dia_matr1_a13 = math.round(diagonalised_mat_r1[2]);
        var dia_matr1_a1 = [dia_matr1_a11, dia_matr1_a12, dia_matr1_a13];


        var dia_matr2_a21 = math.round(diagonalised_mat_r2[0]);
        var dia_matr2_a22 = math.round(diagonalised_mat_r2[1]);
        var dia_matr2_a23 = math.round(diagonalised_mat_r2[2]);
        var dia_matr1_a2 = [dia_matr2_a21, dia_matr2_a22, dia_matr2_a23];

        var dia_matr3_a31 = math.round(diagonalised_mat_r3[0]);
        var dia_matr3_a32 = math.round(diagonalised_mat_r3[1]);
        var dia_matr3_a33 = math.round(diagonalised_mat_r3[2]);
        var dia_matr1_a3 = [dia_matr3_a31, dia_matr3_a32, dia_matr3_a33];
        
        thoutput = "\n\tDeterminant of the matrix = "+thdet+"\n\n\t"+th_matrix_type+"\n\n\tEigen values ('λ') = "+math.round(Object.values(thevalues))+"\n\n\tEigen Vectors:\n\t\tX1 = ["+thvx1a+", "+thvx1b+", "+thvx1c+"]"+"\n\t\tX2 = ["+thvx2a+", "+thvx2b+", "+thvx2c+"]"+"\n\t\tX3 = ["+thvx3a+", "+thvx3b+", "+thvx3c+"]"+"\n\n\tDiagonalized Matrix (D):"+"\n\t\t|"+dia_matr1_a1+"|"+"\n\t\t|"+dia_matr1_a2+"|"+"\n\t\t|"+dia_matr1_a3+"|";
        thoutbox.innerHTML = thoutput;
        
    } else {
        console.log("idk man :|")
    }
}