echo 'BORRANDO IMAGENES'
docker stop dpm-front && docker rm dpm-front
echo 'CORRIENDO IMAGEN'
docker run -p 3000:3000 --name dpm-front -d dpm-front

