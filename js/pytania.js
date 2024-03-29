const questions = [
"Czy na kowadło potrzeba 33 sztabki?",
"Czy najnowsza aktualizacja minecraft to 1.20.4?",
"Czy na serwerze można prowadzić kasyno?",
"Czy na zrobienie beacona wystarczy 1 relikt?",
"Czy warden odradza się?",
"Czy niuchacz spawni się od razu?",
"Czy po zabiciu wiedźmy można otrzymać m.in. potki/butelki i oczy pająka?",
"Czy golem spawni się sam w wiosce?",
"Czy pandy mają jakiś drop po ich zabiciu?",
"Czy drop miedzi z kamienia jest większy od dropu żelaza?",
"Czy efekt zatrucia może zostać usunięty poprzez miód?",
"Czy /warp infoskup i /warp infosklep teleportuje nas w dokładnie to samo miejsce?",
"Czy złotą marchewkę robi się z marchewki i 8 sztabek złota?",
"Czy biblioteczki można robić z każdego rodzaju desek z wyjątkiem bambusowych?",
"Czy czychacz jest koloru szarego?",
"Czy na Java MC z topiciela może wypaść trójząb - jeśli go nie trzyma?",
"Czy za żetony możemy łącznie kupić 32 przedmioty?",
"Czy bez speeda możliwy jest skok na 5 kratek?",
"Czy istnieje obraz o wielkości 5x4 kratek?",
"Czy w Minecraft możemy stawiać blok światła?",
"Czy szansa na rozmnożenie wieśniaka to 3.2%?",
"Czy szansa na wyleczenie osadnika to 15%?",
"Czy maksymalna szansa na wydobycie pradawnych zgliszcz to 50%?",
"Czy szansa na wydobycie sztabki złota to 1.5%?",
"Czy na 1 cobblexa potrzeba 576 cobbla?",
"Czy szansa na złowienie cennego przedmiotu wynosi 10%?",
"Czy na serwerze jest głowa spider-mana?",
"Czy jajko osadnika można otrzymać ze skrzynki z memem?",
"Czy przy otwieraniu skrzynki z memem klucz się zużywa?",
"Czy debris można wydobyć mając 9 poziom kowala?",
"Czy maksymalna ilość pieniędzy jaką można mieć wynosi 40 000 000?",
"Czy szansa na złapanie zwierzaka do jajka przechowującego wynosi 90%?",
"Czy zrzut pojawia się co 3 godziny?",
"Czy można ukryć swoje IP pod tabem?",
"Czy maksymalny poziom pracy globalnej to 95?",
"Czy RealCraft to najlepszy FreeBuild w polsce?",
"Czy ta edycja wystartowała 17 grudnia 2023?",
"Czy uderzając krowę w głowę zadamy jej obrażenia?",
"Czy zgniły ziemniak daje więcej punktów głodu niż zwykły ziemniak?",
"Czy pszczoła po zaatakowaniu gracza umiera?",
"Czy liście są puste w środku?",
"Czy kusza jest szybsza od łuku i strzela mocniej i dalej?",
"Czy istnieje szary enderman?",
"Czy mooshroom (gatunek krowy) daję zupę grzybową po użyciu na niej pustej miski?",
"Czy do stworzenia 11 bloków żelaza potrzeba 99 sztabek żelaza?",
"Czy konie rozmnaża się zwykłą marchewką?",
"Czy można oswoić owce?",
"Istnieją białe kwiaty w mc?",
"Czy dorosłe ocelot'y potrafią pływać?",
"Czy blok purpuru można wydobyć drewnianym kilofem?",
"Czy rudę diamentu można wydobyć kamiennym kilofem?",
"Do stworzenia 6 drabinek potrzeba 14 patyków?",
"Czy fajerwerke zrobimy z prochu-papieru-gwiazdy pirotechnicznej?",
"Czy Minecraft jest napisany w Javie?",
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
