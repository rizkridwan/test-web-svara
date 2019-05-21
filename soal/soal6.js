/**
 * Menghilangkan nilai dari Array.
 * @arrayBuah @Array campuran buah dan hewan
 * @arrayHewan @Array dari hewan
 *
 * @return sebuah @Array
 */
function hapusArray(arrayBuah, arrayHewan) {
  const arrayBuahBaru = []; //membuat Array baru

  //tempat coding disini
  for(var i=0;i<arrayHewan.length;i++){
  	for (var j=0;j<arrayBuah.length;j++) {
  		// statement
  		if(arrayBuah[j]==arrayHewan[i]){
  			arrayBuah.splice(j,1);
  		}
  	}
  }
  arrayBuahBaru.push(arrayBuah);

  return arrayBuahBaru;
}
