const download = () =>{
    let link = document.createElement('a');
    link.download= 'filename.png';
    link.href=document.querySelector('#canvas').toDataURL()
    link.click()
}