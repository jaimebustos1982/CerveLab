# CerveLab · Planta Virtual de Procesos Agroindustriales

Cervecería virtual en 3D del Programa de Ingeniería Agroindustrial de la Universidad Surcolombiana.
Docente: Ing. Jaime Daniel Bustos, D.Sc.

## Archivos

```
index.html                         la aplicación completa (un solo archivo)
manifest.json                      datos para instalarla como aplicación en el PC
sw.js                              funcionamiento sin conexión y actualización automática
icon-192.png, icon-512.png         íconos (jarra de cerveza sobre café oscuro)
registro_cervelab_apps_script.gs   backend del registro de uso (va en Google Apps Script, no en GitHub)
```

## Publicar en GitHub Pages (igual que las otras plantas)

1. En GitHub, crea un repositorio nuevo llamado `CerveLab` (público).
2. **Add file → Upload files**: sube `index.html`, `manifest.json`, `sw.js`, `icon-192.png` e `icon-512.png`.
3. **Settings → Pages → Deploy from a branch → main / (root) → Save**.
4. En uno o dos minutos queda en `https://jaimebustos1982.github.io/CerveLab/`.

En el PC, Chrome o Edge muestran el botón **Instalar** en la barra de direcciones: así queda como aplicación de escritorio, con su ícono, y funciona sin conexión.

## Activar el registro central (hoja exclusiva de CerveLab)

Cada Lab tiene su propia Google Sheet. No pegues este script en la hoja de otra planta.

1. Crea una Google Sheet nueva llamada **Registro CerveLab**.
2. **Extensiones → Apps Script**. Borra el contenido y pega todo `registro_cervelab_apps_script.gs`. Guarda.
3. **Implementar → Nueva implementación → tipo Aplicación web**.
   - Ejecutar como: **Yo**.
   - Quién tiene acceso: **Cualquier usuario**.
4. Autoriza y copia la URL que termina en `/exec`.
5. En `index.html`, busca `const SHEET_WEBAPP_URL="";` y pega la URL entre las comillas.
6. Sube de nuevo `index.html`. Cambia la versión en los dos archivos: `VERSION` en `index.html` (de `2026.10.08-F1` a `-F2`) y `CACHE_NAME` en `sw.js` (igual).

Cada vez que edites el Apps Script: **Implementar → Gestionar implementaciones → editar → Nueva versión** (la URL no cambia).

## Código de acceso docente

`CERVE-2026`. Está en `DOCENTE_CODE` (index.html) y en `SECRET` (Apps Script); si cambias uno, cambia el otro. El código viaja dentro del archivo, así que protege de curiosos, no de alguien que lea el código fuente.

## Turnos (11, hasta 33 estrellas)

1. Recepción de malta: aceptar o rechazar 8 lotes; mezcla en silos al menor costo.
2. Molienda: abertura de rodillos, acondicionamiento y aspiración de polvo.
3. Maceración: relación agua/malta y temperatura del agua de empaste.
4. Cuba filtro: volumen y temperatura del agua de lavado.
5. Cocción: evaporación, tiempo de ebullición, kilos y lote de lúpulo.
6. Whirlpool, enfriador de placas (ε-NTU) y aireación.
7. Fermentación primaria: levadura, tasa de siembra, temperatura y días.
8. Maduración: reposo de diacetilo y maduración en frío.
9. Filtración y carbonatación: filtro, presión y temperatura (ley de Henry).
10. Envasado: inspector, preevacuación, jetting, temperatura, velocidad y volumen.
11. Pasteurización en túnel: temperatura y tiempo (unidades de pasteurización).

## Qué registra

Cada ingreso, cada lote producido y cada cierre de sesión, con: integrantes y códigos, modalidad, grupo, turno, producto, número de intento, estrellas, puntos, predicción y valor real, resultado por categoría (inocuidad y seguridad, norma, cliente, eficiencia), fallas, costo por unidad, tiempo activo y las variables que fijó el equipo.

## Para verificar que un cambio llegó

El pie del panel docente muestra la versión (`2026.10.08-F1`). Cámbiala en `VERSION` dentro de `index.html` y en `CACHE_NAME` de `sw.js` cada vez que publiques.
