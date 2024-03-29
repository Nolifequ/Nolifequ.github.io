const questions = [
"Czy można rozmnożyć Niedźwiedzie polarne?",
"Czy możliwe jest, żeby witherowy szkielet usiadł na pająku tworząc witherowego jeźdzca?",
"Czy szkielet ma tyle samo serc co villager?",
"Czy na każdym poziomie trudności posuch nadaje efekt głodu?",
"Czy posuch po zbyt długim byciu w wodzie zmieni się w topielca?",
"Czy zombie są tej samej wysokości co Posuchy?",
"Czy szansa na zrespienie się endermita za pomocą przeteleportowania się przez gracza ender perłą wynosi 3%?",
"Czy woda zadaje obrażenia endermitą?",
"Czy piasek dusz zadaje obrażenia endermitą?",
"Czy jest szansa aby zzombifikowany piglin pojawił się w potalu do netheru?",
"Czy Shulker ma 10 serc?",
"Czy Shulkery w twierdzach odradzają się na nowo?",
"Czy pszczoły można rozmnożyć sadzonką azali?",
"Czy owca naturalnie może się pojawić z pomarańczowm kolorem wełny?",
"Czy biom wiśniowy gaj, jest biomem górskim?",
"Czy w endzie maksymalnie można zrobić 15 nowych bram poprzez zabicie smoka?",
"Czy jest szansa na znalezienie aktywnego portalu do endu?",
"Czy w endzie można odpalić portal do netheru?",
"Czy szansa na zdobycie szablonu kowalskiego 'dzicz' z dżunglowej świątyni wynosi 22,5%?",
"Czy set łowcy nagród daje 20% szans na wypadnięcie trofeum z gracza?",
"Czy pustynna świątynia to jedyne miejsce w którym naturalnie pojawia się TNT?",
"Czy w leśnym dworze można znaleźć spawner pająków?",
"Czy w obu wersjach minecrafta efekt 'bohater wioski' Trwa 40 minut?",
"Czy efekt 'bad omen' można usunąć z gracza pijąc mleko?",
"Czy gracze po przegraniu najazdu w wersji bedrock edition otrzymują na 100 minut efekt bad omena?",
"Czy maksymalna ilość fal najazdów to 7?",
"Czy w wersji 1.16,1 zostały dodane pigliny okrutniki?",
"Czy szansa na wygenerowanie się puszczonej wioski wynosi 5%?",
"Czy zabicie małego osadnika odejmuje więcej reputacji w wiosce co zabicie żelaznego golema?",
"Czy jeśli reputacja gracza w wiosce wynosi mniej niż -15 to golem go atakuje?",
"Czy zabicie małego villagera zabiera tyle samo reputacji w wiosce co zabicie wioskowego golema?",
"Czy na serwerze podatek wynoszący za wymiane to 5%?",
"Czy z zabłoconego namorzynowego korzenia niuchacz jest wstanie wykopać nasiona lub strąki dzbanecznika?",
"Czy pełna wersja java edition miała premiere 20 sierpnia 2009 roku?",
"Czy szansa na znalezienie obsydianu w skrzynce w netherowej fortecy wynosi 36,5%?",
"Czy wschód słońca w minecraft trwa minutę i 40 sekund?",
"Czy w minecraftcie wyróżniamy 6 faz księżyca?",
"Czy enderman może zrespić się w miejscu nasłonecznionym?",
"Czy witherowy szkielet jest tego samego wzrostu co zwykły szkielet?",
"Czy nietoperz pomimo efektu niewidzialności na graczu może go zobaczyć?",
"Czy przywoływacz może przywołać 5 dręczyciceli?",
"Czy przywoływacz będzie atakować withera?",
"Czy magmołaz otrzymując efekt szybkości będzie poruszał się szybko po każdej powierzchi?",
"Czy dorosłe magmołazy są jedynymi netherowymi mobami, które są pasywane?",
"Czy za zabicie pająka jaskiniowego dostaję się poziom pracy do łowcy?",
"Czy nether był podzielony na biomy w wersji 1.15?",
"Czy podróżowanie w netherze jest 7 razy szybsze?",
"Czy zegary i kompasy są jedynymi przedmiotami które działają w netherze niepoprawnie?",
"Czy poziomy światła w netherze są takie same jak w normalnym świecie?",
"Czy w minecraft wyróżniamy 9 odmian oceanu?",
"Czy szansa na znalezienie zaklętego złotego jabłka w pustynnej świątyni wynosi 3,3%?",
"Czy na znalezienie odłamków ceramiki są 3 sposoby?",
"Czy można zdobyć podejrzany blok poprzez narzędzie z jedwabnym dotykiem?",
"Czy pradawne miasto zawsze znajduję się na wysokości Y= -52?",
"Czy szansa na znalezienie szablonu kowalskiego 'Nadzorca' Jest taka sama co na szablon kowalski 'Cisza'?",
"Czy szansa na znalezienie zaklętej książki 'naprawa' w pradawnych miastach wynosi 7%?",
"Czy szkielety mogą odrodzić się na terenie pradawnego miasta?",
"Czy podejrzany żwir/piasek upadając z wysokości rozbija się?",
"Czy z podejrzanego piasku/żwiru możemy wyszczotkować 2 rodzaje szablonów kowalskich?",
"Czy szansa na upuszczenie sztabki miedzi z utopca po śmierci wynosi 13%?",
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
