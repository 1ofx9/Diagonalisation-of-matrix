<!-- Author: @Subash Praveen Github: @1ofx9 -->
# **Diagonalisation Of Matrix**
 Diagonalisation of a matrix is the process of reduction of a matrix to diagonal form. The process of reduction of a matrix to diagonal form is as follows: A square matrix of order n with n linearly independent eigen vectors can be diagonalised by a similarity transformations D = (B-)AB where B is the modal matrix whose columns are the eigen vecors of the matrix and (B-) is the inverse of B.

## Try It!
Live on Github Pages [here](https://1ofx9.github.io/Diagonalisation-of-matrix/).
<br>
Or download Source code directly from [here](https://github.com/SUBASH2309/Diagonalisation-of-matrix/archive/refs/heads/master.zip).

### License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


This project is licensed under The MIT License.

### How it Works?
![Steps involved in DM](./assets/DM-plan.jpg)
<br>

Note: The diagonalised form of a symmetric matrix (D) can also be obtained using the formula used for skew-symmetric matrix i.e. [(B-)AB]. Therefore, using a normalised matrix may not always be necessary.

#### 1. Matrix Visibility & Reset Functions:

- `three()` and `two()` functions control the visibility of matrix inputs.
- The project uses a responsive **Flexbox layout**, toggling between matrix modes using CSS classes for a smooth flow.
- Switching between modes automatically triggers `clearAll()`, which resets all input values and the results area.

#### **2. Matrix Calculation Functions:**
#### 2.1 Unified Calculation Logic:
- The project uses a consolidated `performCalculation(size)` function to handle both 2x2 and 3x3 matrices.
- **Input Validation**: Since inputs are converted to text fields (to remove browser spin buttons), a custom real-time validator ensures only numeric values (0-9, leading minus, and one decimal point) are accepted.
- **Symmetry Check**: Determines if the matrix is Symmetric (A = A*) or Non-Symmetric using `math.deepEqual()`.
- **Eigensystem**: Computes eigenvalues and eigenvectors via `math.eigs()`.
- **Diagonalization**: Constructs the Modal Matrix $P$, calculates $P^{-1}$, and finally computes $D = P^{-1}AP$.

#### 2.2 Error Handling:
- Smarter error detection specifically identifies if a matrix is **non-diagonalizable** (when the eigenvectors are not linearly independent) by catching singular matrix errors during the inversion of $P$.

#### 3. Webpage Interaction:
- The layout is now fully **responsive**, shifting elements to a single column on smaller screens. 
- Results are displayed interactively in the `textarea` with clear, formatted steps.

#### 4. Matrix Operations:
- The code involves operations such as finding determinants, eigenvalues, eigenvectors, matrix transposition, and similarity transformations.

#### 5. External Library:
- The code relies on the **math.js** library for high-level matrix operations.
<br>

In summary, this tool enables users to input 2x2 or 3x3 matrices on a webpage, performs linear algebra operations, and provides a detailed step-by-step diagonalization result.

### References and Credits:
- Understanding of diagonalization of matix in linear algebra [Chapter 13](https://github.com/weijie-chen/Linear-Algebra-With-Python/blob/master/Chapter%2013%20-%20Diagonalization.ipynb) by [**Weijie Chen**](https://github.com/weijie-chen).
 - Idea and some parts of code for Matrix Selection is from [**ElenaChes**](https://github.com/ElenaChes)'s "JavaScript-HTML-Matrix-Calculator". Check out his/her's [project](https://github.com/ElenaChes/JavaScript-HTML-Matrix-Calculator/tree/master).
 - Idea of using Textbox (textarea) as an output display in HTML is from [**LuisBoto**](https://github.com/LuisBoto)'s project "[JSMatrixCalculator](https://github.com/LuisBoto/JSMatrixCalculator/tree/master)".
<br>

 **Math js**
 <br>

 An extensive math library for JavaScript and Node.js. Find it [**here**](https://mathjs.org/)!.
 <br>

 ```js
 math.round()
 math.eigs()           // For Eigen values and Eigen vectors
 math.transpose()      // To find the transpose of matrix
 math.det()            // To find the determinant of matrix
 math.inv()            // To find the inverse of matrix
 math.multiply()       // To multiply matrices
 math.deepEqual()      // To check matrix equality (Symmetry)
 ```

### Last Updated

This README was last updated on April 05, 2026.
