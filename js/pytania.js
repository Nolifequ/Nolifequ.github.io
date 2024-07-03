const questions = [

"Czy papugi da się rozmnożyć?",
"Czy smok endu pomimo trybu pokojowego będzie próbował atakować?",
"Czy minimalny poziom oświetlenia przez księżyc podczas nocy to 3?",
"Czy w minecraft wyróżniamy 8 faz księżyca?",
"Czy liczba pojawiających się szlamów na bagnach zależy od faz księżyca?",
"Czy blok pryzmarynu zmienia co jakiś czas kolor?",
"Czy jaja sniffera można zdobyć z podejrzanego piasku w ruinach szlaku?",
"Czy podejrzany piasek niszczy się po upadku z wysokości?",
"Czy warden ma 250 serc?",
"Czy w każdym igloo jest przejście do piwnicy z zombi villagerem?",
"Czy każdy szlam może wspinać się po drabinie?",
"Czy w minecraft wyóżniamy 16 szablonów kowalskich (nie licząc netherowego ulepszenia)?",
"Czy zablokowanie skrzynki komendą /skrzynka zablokuj to koszt 15k?",
"Czy na serwerze jest dostępnych 25 wariantów stojaka nie licząc zminimalizowanego?",
"Czy wycofanie licytacji jest darmowe?",
"Czy szkielet ma tyle samo serc co villager?",
"Czy piasek dusz zadaje obrażenia endermitą?",
"Czy w wersji 1.16 zostały dodane pigliny okrutniki?",
"Czy w endzie nie działają poprawnie kompasy mapy i zegarki?",
"Czy z podejrzanego piasku/żwiru można wyszczotkować tylko 2 rodzaje szablonów kowalskich?",
"Czy w minecrafcie zachód słońca trwa minute?",
"Czy działka premium V2 Ma wymiary 44x44?",
"Czy mityczny set po nałożeniu dodaje graczowi 2 serca?",
"Czy z redstone'a można korzystać po przegraniu minimum 12h?",
"Czy shulker nadaje efekt lewitacji graczowi na 15 sek?",
"Czy podczas eventu zwiększony drop z kamienia drop jest zwiększony o 10%?",
"Czy w wersji 1.21 dodano 6 nowych wariantów psów?",
"Czy obecna edycja zaczęła się 28 kwietnia?",
"Czy magiczne paliwo craftuje się z stacka obsydianu i 9 diamentów?",
"Czy granat dymny craftuje się z butelki i 4 prochów strzelniczych?",
"Czy /kit zbroja można odbierać co 12h?",
"Czy /kit enderchest można odbierać co 24h?",
"Czy największa szansa na drop pradawnych zgliszczy jest przy 30 poziomie górnika?",
"Czy stołu kowalskiego można używać dopiero od 2 poziomu pracy kowala?",
"Czy przeniesienie targu to koszt 25k?",
"Czy po pokonaniu smoka endu upuszcza on 70 punktów doświadczenia?",
"Czy granica endu znajduje się na około 35- milionowej kratce?",
"Czy magnetyt robi się z sztabki netherytu i 9 cobbla",
"Czy kotwice odrodzenia craftuje się z 6 płaczących obsydianów i 3 jasnogłazów?",
"Czy biom wiśniowy gaj jest biomem górskim?",
"Czy maksymalna ilość fal najazdów to 7?",
"Czy w endzie można zrobić maksymalnie 10 nowych bram poprzez zabicie smoka?",
"Czy w minecrafcie wyróżniamy 9 odmian oceanu?",
"Czy na znalezienie odłamków ceramiki są 3 sposoby?",
"Czy efekt bohatera wioski utrzymuje się na graczu przez 45 minut?",
"Czy szkielety mogą odrodzić się na terenie pradawnych miast?",
"Czy podróżowanie w netherze jest 7 razy szybsze?",
"Czy szansa na upuszczenie sztabki miedzi z utopca po śmierci wynosi 13%?",
"Czy zabicie małego villagera odejmuje tyle samo punktów reputacji co zabicie golema?",
"Czy szansa na wygenerowanie się opuszczonej wioski wynosi 3%?",
"Czy jeśli reputacja gracza w wiosce wynosi mniej niż 20 to golem go atakuje?",
"Czy nietoperz pomimo efektu niewidzialności na graczu będzie od niego uciekał?",
"Czy woda zadaje obrażenia endermitą?",
"Czy na każdym poziomie trudności posuch nadaje efekt głodu?",

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
