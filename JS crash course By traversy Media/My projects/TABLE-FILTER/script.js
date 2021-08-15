let input = document.getElementById('table-input');
input.addEventListener('keyup', filterTable);

function filterTable(){
    let input = document.getElementById('table-input');
    let filter = input.value.toUpperCase();
    let table = document.getElementById('table');
    let tr = table.getElementsByTagName('tr');

    for(let i = 0; i < tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];
        if(td){
           let txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = '';
            }else{
                tr[i].style.display = 'none';
            }
        }
    }
}