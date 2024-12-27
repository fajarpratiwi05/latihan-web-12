var nim="2401010423"
var urlAPi="https://apimhstiki.ptov.my.id/"
var urlREAD= urlAPi+`testi-${nim}/read`
//console.log(urlREAD)

$(function(){

    $.ajax({
        url:urlREAD,
        method: 'GET',
        dataType: 'json',
        success:function(dta){
            let tbdta=""
            let ipx=""
            if(dta.error==0){
                //ini untuk error kode 0
                dta.TESTI.forEach(function(isi){
                    tbdta+=` <tr>
                    <td>${isi.NAMA}</td>
                    <td>${isi.EMAIL}</td>
                    <td>${isi.TESTI}</td>
                    <td>${isi.IPX}</td>
                    <td><a onClick ="destroy('${isi.IDX}')"class="btn btn-success btn-sm" > Hapus </a></td>
                  </tr>`
                })
            }else{
                //ini bagian error selain kode 0
            if(dta.error==4){
                //ini bagian error kode 4
                dta.TESTI.forEach(function(isi){
                    tbdta+=` <tr>
                    <td>${isi.NAMA}</td>
                    <td>${isi.EMAIL}</td>
                    <td>${isi.TESTI}</td>
                    <td>${ipx}</td>
                    <td></td>
                  </tr>`
                })
            }
          }
          $("tbody").html(tbdta)
        },
        erorr: function(){
            console.log("gagal membaca data")
        }
    })
})