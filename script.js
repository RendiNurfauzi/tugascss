// JavaScript
document.getElementById('hamburgerCheckbox').addEventListener('change', function() {
    document.getElementById('menu').style.transform = this.checked ? 'translate(0, 0)' : 'translate(-100%, 0)';
  });
  

$(document).ready(function() {
    $("#contactForm").validate({
        rules: {
            namaLengkap: {
                required: true,
                maxlength: 50
            },
            email: {
                required: true,
                email: true
            },
            nomorHandphone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 15
            },
            pesan: {
                required: true,
                maxlength: 500
            }
        },
        messages: {
            namaLengkap: {
                required: "Nama lengkap wajib diisi",
                maxlength: "Nama lengkap tidak boleh lebih dari 50 karakter"
            },
            email: {
                required: "Email wajib diisi",
                email: "Format email tidak valid"
            },
            nomorHandphone: {
                required: "Nomor handphone wajib diisi",
                number: "Nomor handphone harus berupa angka",
                minlength: "Nomor handphone minimal 10 angka",
                maxlength: "Nomor handphone maksimal 15 angka"
            },
            pesan: {
                required: "Pesan wajib diisi",
                maxlength: "Pesan tidak boleh lebih dari 500 karakter"
            }
        },
        submitHandler: function(form) {
            event.preventDefault();

            var namaLengkap = document.getElementsByName('namaLengkap')[0].value;
            var email = document.getElementsByName('email')[0].value;
            var nomorHandphone = document.getElementsByName('nomorHandphone')[0].value;
            var pesan = document.getElementsByName('pesan')[0].value;

            emailjs.send("rendi888", "rendi888template", {
                from_name: namaLengkap,
                to_name: "Rendi",
                message: pesan,
                reply_to: email
            }).then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Pesan berhasil dikirim!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Pesan gagal dikirim!');
            });

            return false;
        }
    });
});
