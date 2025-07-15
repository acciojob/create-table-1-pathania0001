
const table = document.getElementById("sampleTable");
function insert_Row() {
    const newRow = document.createElement("tr");
	
	const leftCol = document.createElement("td");
	leftCol.innerText="New Cell1";
	const reightCol = document.createElement("td");
	reightCol.innerText="New Cell2";
	
	newRow.appendChild(leftCol);
	newRow.appendChild(reightCol);
	table.appendChild(newRow);
	return;
}
