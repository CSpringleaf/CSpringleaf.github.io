
export function getloadeds() {

    let row = localStorage.getItem('loadeds');
    if (row === null || row === '') {
        localStorage.setItem('loadeds', []);
        console.log('未设置字段');
        return []
    }
    let loadeds = JSON.parse(row)
    console.log('loadeds', loadeds);
    if (loadeds === null || loadeds === []) {
        return []
    }
    
    return loadeds
}
 

export function setloadeds(loadeds) {
    let row = JSON.stringify(loadeds);
    localStorage.setItem('loadeds', row);
    console.log('成功');
}