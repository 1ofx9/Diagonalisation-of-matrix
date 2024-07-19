<!-- Author: @Subash Praveen Instagram: @sub._.praveen Github: @SUBASH2309 -->
## Dev notes
 Can i make this better? yes. <br>
 will i do it? nahhh...

# **Diagonalisation Of Matrix**
 Diagonalisation of a matrix is the process of reduction of a matrix to diagonal form. The process of reduction of a matrix to diagonal form is as follows: A square matrix of order n with n linearly independent eigen vectors can be diagonalised by a similarity transformations D = (B-)AB where B is the modal matrix whose columns are the eigen vecors of the matrix and (B-) is the inverse of B.

## Try It!
Live on Github Pages [here](https://1ofx9.github.io/Diagonalisation-of-matrix/).
<br>
Or download Source code directly form [here](https://github.com/SUBASH2309/Diagonalisation-of-matrix/archive/refs/heads/master.zip).

### License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


This project is licensed under The MIT License.

### How it Works?
![Steps involved in DM](./assets/DM-plan.jpg)
<br>

Note: The diagonalised form of a symmetric matrix (D) can also be obtained using the formula used for skew-symmetric matrix i.e. [(B-)AB]. Therefore, using a normalised matrix may not always be necessary.

#### 1. Matrix Visibility Functions:

- `three()` and `two()` functions control the visibility of matrix elements on a webpage. 
- For a 3x3 matrix, it makes the elements visible and hides the elements of a 2x2 matrix, and vice versa.

#### **2. Matrix Calculation Functions:**
#### 2.1 `calculate2()` Function (for 2x2 matrices):
- Reads input values from HTML input elements representing a 2x2 matrix.
- Calculates the determinant of the matrix (`twdet` variable).
- Computes eigenvalues and eigenvectors using the `math.eigs()` function.
- Determines if the matrix is symmetric or skew-symmetric.
- Calculates the inverse of the eigenvectors and diagonalizes the matrix.
- Displays the results in the console and updates the webpage with the results.

#### 2.2 `calculate3()` Function (for 3x3 matrices):
- Similar to `calculate2()`, but for 3x3 matrices.
- Reads input values from HTML input elements representing a 3x3 matrix.
- Calculates the determinant, eigenvalues, and eigenvectors.
- Determines if the matrix is symmetric or skew-symmetric.
- Calculates the inverse of the eigenvectors and diagonalizes the matrix.
- Displays the results in the console and updates the webpage with the results.

#### 3. Webpage Interaction:
- The visibility functions (`three()` and `two()`) manipulate the visibility of matrix elements on the webpage.
- The calculated results are displayed in an output box on the webpage, particularly in an HTML element with the ID `textarea`.

#### 4. Console Logging:
- There are numerous `console.log` statements for debugging purposes, helping developers understand the intermediate values and steps in the calculations.

#### 5. Matrix Operations:
- The code involves operations such as finding determinants, eigenvalues, eigenvectors, matrix transposition, matrix types (symmetric or skew-symmetric), and diagonalization.

#### 6. External Library:
- The code relies on an external library named `math` (math.js) for mathematical  
<br>

In summary, this code enables users to input 2x2 or 3x3 matrices on a webpage, performs various linear algebra operations on them, and displays the results interactively.

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
 math.multiply() //to multiply matrices
 ```

### Last Updated

This README was last updated on Jul 7, 2024.
