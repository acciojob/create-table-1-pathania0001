
const table = document.getElementById("sampleTable");
function insert_Row() {
    const newRow = document.createElement("tr");
	
	const leftCol = document.createElement("td");
	leftCol.innerText="New Cell1";
	const rightCol = document.createElement("td");
	rightCol.innerText="New Cell2";
	
	newRow.appendChild(leftCol);
	newRow.appendChild(rightCol);
     const target = table.firstElementChild;
	target.insertBefore(newRow,target.children[0]);
	return;
}
