const arrayContainer = document.getElementById('array-container');
const arraySizeInput = document.getElementById('array-size');
const speedInput = document.getElementById('speed');
let array = [];

function generateArray() {
    const size = parseInt(arraySizeInput.value, 10);
    array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
    renderArray();
}

function renderArray() {
    arrayContainer.innerHTML = '';
    array.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${value * 3}px`;
        arrayContainer.appendChild(bar);
    });
}

async function sortArray() {
    // Implement your sorting algorithm here (e.g., bubble sort, quicksort, mergesort)
    // Visualize the sorting process by updating the UI
    // Use the 'speed' input to control the animation speed

    // Example (Bubble Sort):
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                await sleep(101 - speedInput.value); // Adjust speed
                swap(j, j + 1);
                renderArray();
            }
        }
    }
}

function swap(i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Initial array generation
generateArray();
