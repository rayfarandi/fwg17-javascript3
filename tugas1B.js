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


async function fungsiResult(day) {
    try {
        const result = await cekHariKerja(day) 
        console.log(result + ' Hari Kerja')
    } catch (error) {
        console.error(error.message)
    }
}

fungsiResult('senin');
fungsiResult('selasa');
fungsiResult('sabtu');
