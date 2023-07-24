
    // Função para inicializar o mapa
    function initMap() {
        // Localização que deseja exibir no minimapa (latitude e longitude)
        var myLatLng = { lat: SEU_LATITUDE, lng: SEU_LONGITUDE };

        // Opções do mapa
        var mapOptions = {
            center: myLatLng,
            zoom: 15 // O nível de zoom pode ser ajustado conforme necessário
        };

        // Criar o mapa e vinculá-lo à div do minimapa
        var map = new google.maps.Map(document.getElementById('minimap'), mapOptions);

        // Adicionar um marcador na localização desejada
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Localização'
        });
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const submenus = document.querySelectorAll('.submenu');
    
    menuToggle.addEventListener('click', () => {
      submenus.forEach(submenu => submenu.classList.toggle('show'));
    });

