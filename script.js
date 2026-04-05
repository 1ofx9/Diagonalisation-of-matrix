// Author: @Subash Praveen Github: @1ofx9

function clearAll() {
	const inputs = document.querySelectorAll('input[type="text"]');
	inputs.forEach((input) => {
		input.value = "0";
	});

	const outbox = document.getElementById("textarea");
	if (outbox) outbox.innerHTML = "";
}

function three() {
	clearAll();
	document.getElementById("mat-2x2-box").classList.add("hidden");
	document.getElementById("mat-3x3-box").classList.remove("hidden");
}

function two() {
	clearAll();
	document.getElementById("mat-3x3-box").classList.add("hidden");
	document.getElementById("mat-2x2-box").classList.remove("hidden");
}

function getMatrix(size) {
	const matrix = [];
	const prefix = size === 2 ? "two" : "three";

	for (let r = 1; r <= size; r++) {
		const row = [];
		for (let c = 1; c <= size; c++) {
			const el = document.getElementById(`${prefix}r${r}c${c}`);
			if (el) {
				const val = parseFloat(el.value) || 0;
				row.push(val);
			}
		}
		matrix.push(row);
	}
	return matrix;
}

function performCalculation(size) {
	const outbox = document.getElementById("textarea");
	if (!outbox) return;
	outbox.innerHTML = "\n\tAnalyzing matrix...";

	const matrix = getMatrix(size);

	try {
		// MATH STEP 1: Calculate the Determinant
		const det = math.det(matrix);

		// MATH STEP 2: Find the Eigenvalues and Eigenvectors
		const eigs = math.eigs(matrix);
		const { values, eigenvectors: vectors } = eigs;

		// MATH STEP 3: Identify if the matrix is Symmetric (A = A')
		const transpose = math.transpose(matrix);
		const isSymmetric = math.deepEqual(matrix, transpose);
		const matrixType = isSymmetric
			? "The Matrix is Symmetric (A = A*)"
			: "The Matrix is Skew-Symmetric (A ≠ A*)";

		// MATH STEP 4: Build the Modal Matrix P (columns are eigenvectors)
		// and find its inverse. Note: This will fail if the matrix isn't diagonalizable!
		const transitionMatrix = math.transpose(vectors.map((ev) => ev.vector));
		const invP = math.inv(transitionMatrix);

		// MATH STEP 5: Final calculation: D = P^-1 * A * P
		const diagonalMat = math.multiply(invP, matrix, transitionMatrix);

		let output = `\n\tDeterminant of the matrix = ${math.round(det, 2)}`;
		output += `\n\n\t${matrixType}`;
		output += `\n\n\tEigen values ('λ') = [${values.map((v) => math.round(v, 2)).join(", ")}]`;

		output += `\n\n\tEigen Vectors:`;
		vectors.forEach((ev, i) => {
			const vRounded = ev.vector.map((n) => math.round(n, 2));
			output += `\n\t\tX${i + 1} = [${vRounded.join(", ")}]`;
		});

		output += `\n\n\tDiagonalized Matrix (D):`;
		diagonalMat.forEach((row) => {
			const rowRounded = row.map((n) => math.round(n, 2));
			output += `\n\t\t| ${rowRounded.join(", ")} |`;
		});

		outbox.innerHTML = output;
	} catch (err) {
		console.error(err);
		let userMsg = "Error in calculation.";

		if (err.message.includes("singular")) {
			userMsg =
				"The matrix is non-diagonalizable (it doesn't have enough independent eigenvectors).";
		} else if (err.message.includes("dimension")) {
			userMsg = "Calculation error due to dimension mismatch.";
		} else {
			userMsg = `General Error: ${err.message}`;
		}

		outbox.innerHTML = `\n\t[ ERROR ]\n\n\t${userMsg}\n\n\tTip: Double check your values!`;
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const inputs = document.querySelectorAll('input[inputmode="numeric"]');
	inputs.forEach((input) => {
		input.addEventListener("input", function () {
			let val = this.value;

			val = val.replace(/[^0-9.-]/g, "");

			if (val.includes("-", 1)) {
				val = val[0] + val.slice(1).replace(/-/g, "");
			}
			const parts = val.split(".");
			if (parts.length > 2) {
				val = `${parts[0]}.${parts.slice(1).join("")}`;
			}

			this.value = val;
		});
	});
});

window.calculate2 = () => performCalculation(2);
window.calculate3 = () => performCalculation(3);
window.two = two;
window.three = three;
