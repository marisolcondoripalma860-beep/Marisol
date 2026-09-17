const listaEstudiante=
[{ nr:1,
     Nombre:"Marisol",
     Apellidos:"Condori",
     FechaNaciento:"10/08/2009",
     Edad:"17",
     Genero:"Femenino",
    },
  {
     nr: 2,
     Nombre: "Alejandro",
     Apellidos: "Mamani",
     FechaNaciento: "15/03/2009",
     Edad: "17",
     Genero: "Masculino"
  },
  {
     nr: 3,
     Nombre: "Camila",
     Apellidos: "Quispe",
     FechaNaciento: "22/11/2009",
     Edad: "16",
     Genero: "Femenino"
  },
  {
     nr: 4,
     Nombre: "Diego",
     Apellidos: "Flores",
     FechaNaciento: "05/01/2009",
     Edad: "17",
     Genero: "Masculino"
  },
  {
     nr: 5,
     Nombre: "Valeria",
     Apellidos: "Vargas",
     FechaNaciento: "14/06/2009",
     Edad: "17",
     Genero: "Femenino"
  },
  {
     nr: 6,
     Nombre: "Mateo",
     Apellidos: "Choque",
     FechaNaciento: "30/09/2009",
     Edad: "16",
     Genero: "Masculino"
  },
  {
     nr: 7,
     Nombre: "Luciana",
     Apellidos: "Mendoza",
     FechaNaciento: "18/04/2009",
     Edad: "17",
     Genero: "Femenino"
  },
  {
    
     nr: 8,
     Nombre: "Lucas",
     Apellidos: "Cruz",
     FechaNaciento: "12/12/2009",
     Edad: "16",
     Genero: "Masculino"
  },
  {
     nr: 9,
     Nombre: "Sofía",
     Apellidos: "Gutiérrez",
     FechaNaciento: "25/07/2009",
     Edad: "17",
     Genero: "Femenino"
  },
  {
     nr: 10,
     Nombre: "Benjamín",
     Apellidos: "Rojas",
     FechaNaciento: "03/02/2009",
     Edad: "17",
     Genero:"Masculino"

  },];
  function mostrarEstudiantes()
  {
    const datos=document.getElementById("datos");
    datos.innerHTML="";
    let fila="";
    listaEstudiante.forEach(
         est=> {
            fila=`
            <tr>
            <td>${est.nr}</td>
            <td>${est.Nombre}</td>
            <td>${est.Apellidos}</td>
            <td>${est.FechaNaciento}</td>
            <td>${est.Edad}</td>
            <td>${est.Genero}</td>
        </tr>
        `;
        datos.innerHTML+=fila;
         }
    );

  }
  mostrarEstudiantes();