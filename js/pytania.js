const questions = [

"Czy kwota którą dostajemy po użyciu /pracuj na naszym discordzie to 750 RCcoin?",
"Czy iskrzyduła postawiona na powierzchni emituje światło?",
"Czy w Minecrafcie mamy 4 rodzaje tulipanów?",
"Czy w Minecrafcie dostępnych jest 6 typów świata? (nie chodzi o biom)",
"Czy aktualizacja 1.9 miała nazwę Combat Update?",
"Czy z 1 jajka mogą wylecieć 3 kurczaki?",
"Czy sztandar to przedmiot który ma najwięcej odmian?",
"Czy w Minecrafcie są osiągnięcia związane z ghastami?",
"Czy osiągnięcie A Balanced Diet polega na tym aby zjeść tylko nieszkodliwe jedzenie?",
"Czy da się bezpiecznie pływać w lawie na survivalu?",
"Czy blok miodu występuje naturalnie w Minecrafcie?",
"Czy osiągnięcie które polega na posiadaniu wszystkich efektów w jednym momencie nazywa się A Stranger Cocktail?",
"Czy kiedykolwiek w historii Minecrafta wyszła wiersja 2.0?",
"Czy wymiar bloku w pikselach to 8x8?",
"Czy do craftingu Observera potrzebne są 2 sztuki kwarcu?",
"Czy w Minecrafcie jest 15 rodzai płyt?",
"Czy w Minecrafcie jest 48 rodzai strzał?",
"Czy za pomocą komendy /weather set clear ustawimy pogodę na bezchmurną?",
"Czy enderman boi się rzuconej w niego miotanej butelki z wodą?",
"Czy po rzuceniu w pająka miksturą niewidzialności jego oczy będą dalej widoczne?",
"Czy blok miodu robimy z 4 butelek z miodem?",
"Czy aby stworzyć blok magmy potrzebujemy 9 kremów magmowych?",
"Czy mleko po wypiciu usuwa tylko losowy efekt sposród tych które posiadamy?",
"Czy Minecraft został przetłumaczony na ponad 120 jezyków?",
"Czy ciasto ma 8 kawałków?",
"Czy istnieje mobspawner creeper'ów?",
"Czy ocelota można oswoić upieczoną rybą?",
"Czy Notch (twórca gry) pochodzi ze Szwecji?",
"Czy można w jakiś sposób wytworzyć kolczastą zbroje?",
"Czy w zarządzie jest aktualnie 6 osób?",
"Czy na naszym serwerze można zdobyć głowę dręczyciela?",
"Czy jedna z unikatowych głów do wyłowienia na serwerze nosi nazwę utopiona czaszka?",
"Czy zanurzając się pod wodą na /spawn otrzymamy efekt Pomocna płetwa 5?",
"Czy na naszym discordzie jest możliwość zakupu czarnego koloru nicku?",
"Czy w Administracji jest aktualnie 20 osób?",
"Czy pierwszy Gracz Edycji został wybrany 5 edycji temu?",
"Czy aktualna edycja rozpoczęła się 28 kwietnia?",
"Czy nowy nether został dodany w wersji 1.15?",
"Czy aby stworzyć ramkę na przedmioty potrzebujemy 3 sztuk skóry?",
"Czy na naszym serwerze istnieje warp który zastępuje komende /kowal?",
"Czy istnieje enchant mroźny piechur III?",
"Czy lilie wodne można położyć na lodzie?",
"Czy 3 aktywne upomnienie skutkuje wyciszeniem?",
"Czy na aktualnej edycji można rozmnażać villagerów?",
"Czy aby stworzyć portal do netheru potrzeba minimum 12 sztuk obsydianu?",
"Czy blok poleceń był w Minecrafcie od samego początku gry?",
"Czy lama gdy spotka wilka będzie wobec niego agresywna?",
"Czy efekt podręcznego pieca hutniczego utrzymuje się przez 15 minut?",
"Czy czas na teleportacje do miejsca śmierci za pomocą różdżki to 3 minuty?",
"Czy efekt woda pod /efekty jest dostępny dla każdego?",
"Czy Mityczna Tarcza posiada enchant niezniszczalności 6?",
"Czy totem nieśmiertelności villagera tworzy wokół niego chroniony obszar 8x8?",

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
