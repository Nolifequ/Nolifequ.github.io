const questions = [

"Czy koszt vipa na stronie przelewem na 60 dni + 5 gratis to 28 zł?",
"Czy żeby zablokować mapę w stole kartograficznym trzeba do niej dodać szybę?",
"Czy podczas szarży żeby była szansa na kozi róg koza musi uderzyć w jakikolwiek blok?",
"Czy obecnie w minecrafcie wyróżniamy 7 rodzajów kozich rogów?",
"Czy w minecrafcie obecnie wyróżniamy 18 płyt muzycznych?",
"Czy żeby odpalić portal do endu potrzebna jest lava pod spodem?",
"Czy w endzie wszystkie itemy służące do nawigacji nie działają poprawnie?",
"Czy w minecrafcie wyróżniamy 6 faz księżyca?",
"Czy warden ma 300 serc?",
"Czy w każdym igloo (oprócz tych w wioskach) znajduje się przejście do piwnicy?",
"Czy cena za sprzedanie 1 świecy pod /skup to 3.5$?",
"Czy cena za sprzedanie 1 emeralda to 150$?",
"Czy można znaleźć kozi róg na posterunku pillagerów?",
"Czy szansa na znalezienie koziego rogu na posterunku pillagerów to 60%?",
"Czy biomy dzielą się na 3 kategorie z względu na temperaturę?",
"Czy oko pająka ma taką samą wartość odżywczą co przepalona wołowina?",
"Czy złoże emeraldów respi się na każdym biomie z górami?",
"Czy skamieliny generują się pod powierzchnią na biomie bagien?",
"Czy żeby zrobić kompas powrotny potrzebne są 4 odłamki pogłosu i jeden zwykły kompas?",
"Czy żeby zrobić miksturę spowolnienia potrzebna jest najpierw mikstura skoku?",
"Czy netherowe brodawki są nie potrzebne tylko do 4 rodzajów potek?",
"Czy do zrobienia beacona potrzebne są 2 pryzmarynowe relikty?",
"Czy limit kaktusów na działce to 500?",
"Czy na serwerze jest obecnie 48 memów do skolekcjonowania?",
"Czy end zalicza się do biomów zimnych?",
"Czy obecnie wszystkich biomów w minecrafcie na wersji java ediotion jest 64?",
"Czy na serwerze można korzystać z redstone'a po przegraniu minimum 12h?",
"Czy wschód słońca w minecraftcie trwa minutę?",
"Czy szansa na pojawienie się na świecie opuszczonej wioski to 1.5%?",
"Czy w wersji opuszczonej wioski domy nie mają okien?",
"Czy jeśli villager znajdzie się 30 kratek od granicy wioski zapomina o jej lokalizacji i nie może do niej wrócić?",
"Czy wędrowny handlarz ma jedno miejsce w wiosce gdzie może się zrespić?",
"Czy szansa na zrespienie się podczas nocy zombie villagera zamiast zwykłego zombie wynosi 7%?",
"Czy za jakiekolwiek handlowanie z villagerem dostajemy punkty reputacji wioski?",
"Czy zwykły szkielet w minecraft strzela co 3 sekundy?",
"Czy w najnowsze wersji minecrafta czyli 1.21 wyróżniamy 3 rodzaje szkieletów?",
"Czy Moba Bagniak możemy ostrzyc za pomocą nożyc?",
"Czy wichrzyk ma 10 serc?",
"Czy od najnowszej wersji są moby które mogą poruszać się w łódce?",
"Czy wichrzyk odbija ataki z daleka?",
"Czy w najnowszej wersji minecraft jest 17 szablonów kowalskich?",
"Czy w wersji 1.21 dodano tyle samo nowych szablonów kowalskich co bannerów?",
"Czy każdy szablon kowalski powielamy za pomocą jakiegoś bloku?",
"Czy w wersji 1.21 zostały dodane 2 nowe płyty muzyczne?",
"Czy każdą sadzonkę drzew otrzymujemy w taki sam sposób?",
"Czy możemy stworzyć siewkę namorzynu przy pomocy mączki kostnej?",
"Czy z każda sadzonka ma te same zasady żeby drzewo urosło?",
"Czy korzenie przewodzą redstone?",
"Czy błoto może się zmienić w blok gliny po przepaleniu?",
"Czy chodząc po bloku błota zapadamy się w nim?",
"Czy żabia lampa emituje taki sam poziom światła co glowstone?",
"Czy da się wydobyć zbrojony łupek kilofem z enchantem jedwabny dotyk?",
"Czy kolor żabiej lampy jest losowy po tym jak żaba połknie małą kostkę magmy?",
"Czy bedrock został przeniesiony z 0 kratki na -64 w wersji 1.17?",
"Czy w wersji 1.18 wysokości świata wynosiła 256?",
"Czy bambusy zostały dodane w wersji 1.14?",
"Czy poruszając się jak i stojąc w słodkich jagodach zadają nam one obrażenia?",
"Czy do zrobienia jakiejś tajemniczej potrawki potrzebny jest mech?",
"Czy do zrobienia tajemniczej potrawki która nadaje efekt słabości potrzebny jest tulipan?",
"Czy obecnie w minecrafcie w wersji 1.21 mamy 23 odłamki ceramiki?",
"Czy do zrobienia wazonu potrzebujemy 4 odłamki ceramiki i 3 cegły?",
"Czy do zrobienia tajemniczej potrawki która nadaje efekt wysokiego skoku potrzebny jest chaber?",

    ];

    const questionsContainer = document.getElementById('questionsContainer');

    questions.forEach((question, index) => {
        const div = document.createElement('div');
        div.classList.add('question');
        div.innerHTML = `
            <button class="copy-button" onclick="copyText('&7[&c&lPytanie&7] &b${question}', this)">Kopiuj</button>
            <p>${question}</p>
        `;
        questionsContainer.appendChild(div);
    });

    function copyText(text, button) {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        button.classList.add('copied');
        button.disabled = true; 
    }

    function goBack() {
        window.history.back();
    }
