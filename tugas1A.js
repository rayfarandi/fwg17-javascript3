const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) =>{
                return item === day
            }) 
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error('Hari ini bukan hari kerja'));
            }
        }, 3000)
    })
    
}
const fungsiResult= (result)=>{
    console.log(result + ` Hari Kerja`)

}

// cekHariKerja('senin')
cekHariKerja('senin').then(fungsiResult).catch((error) => {console.error(error.message);})
cekHariKerja('selasa').then(fungsiResult).catch((error) => {console.error(error.message);})
cekHariKerja('sabtu').then(fungsiResult).catch((error) => {console.error(error.message);})
