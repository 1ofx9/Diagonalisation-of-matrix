<!-- Author: @Subash Praveen Instagram: @sub._.praveen Github: @SUBASH2309 -->

# **Diagonalization Of Matrix**

## Try It!
Live on Github Pages **https://subash2309.github.io/Diagonalization-of-matrix/**
<br>
Or download Source code directly form [here](https://github.com/SUBASH2309/Diagonalization-of-matrix/archive/refs/heads/master.zip).

### Work flow:
![DM](assets/DM-plan%20.jpg)

### How it Works?
This works by taking inputs from the webpage and performing matrix calculations for determinants, eigenvalues, and eigenvectors. The **calculate2** function computes these values for a 2x2 matrix using a math library. The **calculate3** function extends this to 3x3 matrices, additionally determining if the matrix is symmetric or skew-symmetric and performing calcuations to **diagonalise** the matrix. The code then outputs the results to a web page using textarea.

### References and Credits:
- Understanding of diagonalization of matix in linear algebra [Chapter 13](https://github.com/weijie-chen/Linear-Algebra-With-Python/blob/master/Chapter%2013%20-%20Diagonalization.ipynb) by [**Weijie Chen**](https://github.com/weijie-chen).
 - Idea and some parts of code for Matrix Selection is from [**ElenaChes**](https://github.com/ElenaChes)'s "JavaScript-HTML-Matrix-Calculator". Check out his/her's [project](https://github.com/ElenaChes/JavaScript-HTML-Matrix-Calculator/tree/master) on matrix determinant (solution) calculator.
 - Website design inspo and some styles form [**John doe**](https://www.youtube.com/@howtobecomeadeveloper/). Here's his [toutrial](https://youtu.be/ldwlOzRvYOU?si=m8uyjvrMfTJP6vDa) and the website [preview](https://tangerine-hummingbird-1479b6.netlify.app/).
 - Idea of using Textbox(textarea) as a output display in html is from [**LuisBoto**](https://github.com/LuisBoto)'s poject "[JSMatrixCalculator](https://github.com/LuisBoto/JSMatrixCalculator/tree/master)".
<br>

 **Math js**
 <br>
 An extensive math library for JavaScript and Node.js. you can find it [**here**](https://mathjs.org/)!.
 <br>
 ```js
 math.round()
 math.eigs() //for Eigen values and Eigen vectors
 math.transpose() //to find the transpose of matrix
 math.det() //to find the determinant of matrix
 math.inv() //to find the inverse of matrix
 ```