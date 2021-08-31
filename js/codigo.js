let boton = document.getElementById('boton');

const aviso = function()
{
	Swal.fire({
		title: 'Presionaste el boton',
		confirmButtonText: 'Aceptar',
		icon: 'success'
	});
}

boton.addEventListener("click",aviso);
