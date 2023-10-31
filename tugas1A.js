const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => item === day);

            if (cek) {
                resolve(cek);
            } else {
                reject(new Error('Hari ini bukan hari kerja'));
            }
        }, 3000)
    })
    
}
//arrow function
// const fungsiResult= (result)=>{
//     console.log(result + ` Hari Kerja`)
// }


// cekHariKerja('senin').then(fungsiResult).catch((error) => {console.error(error.message);})
// cekHariKerja('sabtu').then(fungsiResult).catch((error) => {console.error(error.message);})

//inlinefunction
cekHariKerja('senin').then((result) => console.log(result + ' Adalah Hari Kerja')).catch((error) => console.error(error.message));
cekHariKerja('sabtu').then((result) => console.log(result + ' Adalah Hari Kerja')).catch((error) => console.error(error.message));



// cekHariKerja('sabtu').then((result) => console.log(result + ' Adalah Hari Kerja')).catch((error) => console.error(error.input+``+error.message));
