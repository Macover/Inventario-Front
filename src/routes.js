// imports administrador
import TablaUsuario from "views/Dashboard/TablaUsuario.js"
import TablaItem from "views/Dashboard/TablaItems.js"
import TablaArea from "views/Dashboard/TablaAreas.js"

// imports usuario
import InicioU from "views/Dashboard Usuario/InicioU.js";
import CategoriaComputadoras from "views/Dashboard Usuario/CategoriaComputadoras.js";
import HistorialSolicitudesUsuario from "views/Dashboard Usuario/HistorialSolicitudesUsuario.js";
//registro
import Registro from "views/Pages/Registro.js";
// login
import Login from "views/Pages/Login.js";

//imports operador.
import InicioOperador from "views/Dashboard Operador/InicioOperador.js";
import SolicitudesPendientes from "views/Dashboard Operador/SolicitudesPendientes.js";
import SolicitudesAceptadas from "views/Dashboard Operador/SolicitudesAceptadas.js";

import {
  HomeIcon,    
  PersonIcon,  
  RocketIcon,
  GlobeIcon,  
} from "components/Icons/Icons";

var dashRoutes = [  
  {
    name: "VISTAS ADMINISTRADOR",
    category: "account",
    rtlName: "nombre rtl",
    state: "pageCollapse",
    views: [
      { 
        path: "/Usuarios", 
        name: "Usuarios", 
        rtlName: "nombre de rtl", 
        icon: <PersonIcon color="inherit" />, 
        component: TablaUsuario,
        layout: "/admin" 
      },
      { 
        path: "/Items", 
        name: "Items", 
        rtlName: "nombre de rtl", 
        icon: <RocketIcon color="inherit" />, 
        component: TablaItem,
        layout: "/admin" 
      },
      { 
        path: "/Areas", 
        name: "Areas", 
        rtlName: "nombre de rtl", 
        icon: <GlobeIcon color="inherit" />, 
        component: TablaArea,
        layout: "/admin" 
      },
    ],
  },
  {
    name: "VISTAS USUARIO",
    category: "account",
    rtlName: "nombre rtl",
    state: "pageCollapse",
    views: [
      { 
        path: "/Inicio", 
        name: "Inicio", 
        rtlName: "nombre de rtl", 
        icon: <HomeIcon color="inherit" />, 
        component: InicioU,
        layout: "/admin" 
      },
      { 
        path: "/Computadoras", 
        name: "Computadoras", 
        rtlName: "nombre de rtl", 
        icon: <HomeIcon color="inherit" />, 
        component: CategoriaComputadoras,
        layout: "/admin" 
      },
      { 
        path: "/HistorialSolicitudes", 
        name: "Historial Solicitudes", 
        rtlName: "nombre de rtl", 
        icon: <HomeIcon color="inherit" />, 
        component: HistorialSolicitudesUsuario,
        layout: "/admin" 
      },
      {
        path: "/Registro", 
        name: "Registro", 
        rtlName: "nombre de rtl", 
        icon: <HomeIcon color="inherit" />, 
        component: Registro,
        layout: "/auth" 
      },
      {
        path: "/login",
        name: "Login",
        rtlName: "nombre de rtl",
        icon: <HomeIcon color="inherit" />,
        component: Login,
        layout: "/auth",
      },
    ],
  },
  {
    name: "VISTAS OPERADOR",
    category: "account",
    rtlName: "nombre rtl",
    state: "pageCollapse",
    views: [
      { 
        path: "/InicioOperador", 
        name: "Inicio Operador", 
        rtlName: "nombre de rtl", 
        icon: <HomeIcon color="inherit" />, 
        component: InicioOperador,
        layout: "/admin" 
      },
      { 
        path: "/solicitudesPendientes", 
        name: "Solicitudes pendientes", 
        rtlName: "nombre de rtl", 
        icon: <HomeIcon color="inherit" />, 
        component: SolicitudesPendientes,
        layout: "/admin" 
      },
      { 
        path: "/solicitudesAceptadas", 
        name: "Solicitudes aceptadas", 
        rtlName: "nombre de rtl", 
        icon: <HomeIcon color="inherit" />, 
        component: SolicitudesAceptadas,
        layout: "/admin" 
      },
    ],
  },
  
];
export default dashRoutes;
