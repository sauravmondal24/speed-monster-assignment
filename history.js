const histories = document.getElementById('histories');

function addHistory(questionText, timeTaken, errorCount, writingSpeed) {
	const newRow = document.createElement('div');
	newRow.classList.add('card');

	newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>Your writing speed: <span class="bold">${writingSpeed}</span> word per minute</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

	histories.appendChild(newRow);

	let previousTests = JSON.parse(localStorage.getItem('testHistory')) || [];
	previousTests.push({ questionText, timeTaken, errorCount, writingSpeed });
	localStorage.setItem('testHistory', JSON.stringify(previousTests));

	displayHistory();
}

function displayHistory() {
	histories.innerHTML = '';
	const previousTests = JSON.parse(localStorage.getItem('testHistory')) || [];

	previousTests.forEach((test) => {
		const newRow = document.createElement('div');
		newRow.classList.add('card');

		newRow.innerHTML = `
  <h3>${test.questionText}</h3>
  <p>You took: <span class="bold">${test.timeTaken}</span> seconds</p>
  <p>Your writing speed: <span class="bold">${test.writingSpeed}</span> word per minute</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  `;

		histories.appendChild(newRow);
	});
}
