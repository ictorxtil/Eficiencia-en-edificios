# Eficiencia-en-edificios

## :book: Objetivo
Actualmente para vender una viviendo o alquilar una casa se necesita un certificado de eficiencia energética,
con este software se pretende generar este tipo documentos de una forma facil e interactiva que resulte
agradable al usuario.

Para ello se ha creado una interfaz escrita en javascript,html y css que provea de recursos al usuarios para crearlo. Lo primero que podemos encontrar es el menu donde se podrá crear un nuevo modelo,importar o cargar.(Al estar creado con esta estructura se compilar en diferentes sistemas como android,ios o exe)

Si creamos un modelo lo primero que tendremos que hacer es crear los cimientos de la estructura que se podrán visualizar en el visor 3D, seguidamente podremos añadirle capas a la fachada del edificio con el fin de hacerla más estanca y que tenga una mayor eficiencia. Podemos tambien agregarle las ventanas que tenga el edifio.

Existe un apartado en el que se carga externamente una página con los recursos solares del centro de investigación de energías renovables de cual debemos introducir algunos datos para los cálculos posteriores.

En el apartado paneles podemos agregar paneles solares a la cubierta del edicio y a la ventana, estos últimos son transparentes o translúcidos como los OPV o los TLSC( Es lo que se centra mi TFG ).

Y por último se generara un documento con todos los datos anteriores así como los calculados y una imagen del visualizador 3D para mostrar nuestro edificio, esto nos puede servir para generar el informe de eficiencia energética citado al principio del objetivo.


## :books: Librerias externas

-  `1`: https://code.jquery.com/jquery-3.3.1.min.js.
-  `2`: three.min.js.
-  `3`: TrackballControls.js.
-  `4`: Detector.js.
-  `5`: WebGL.js.
-  `6`: dat.gui.min.js.
-  `7`: stats.min.js.
-  `8`: https://getbootstrap.com/.

## :muscle: Actualización
La actualización incluye:
-  `1`: Generar Pdf de eficiencia.

## :star: Author
* **Víctor López Pousada** 


