const translations = {
    page: {
        init: {
            header: "Inicjalizacja projektu",
            project: {
                header: "Inicjalizacja projektu",
                content: "Podstawą rozpoczęcia pracy z biblioteką React jest dodanie bazowej biblioteki do projektu. W tym celu można skorzystać z różnych narzędzi ułatwiających postawienie pierwszych kroków w tym frameworku. Najbardziej podstawowym narzędziem jest 'Create React App' pozwalającym na wygodnie postawić środowisko do budowania prostej Single Page Application (SPA). Do bardziej rozbudowanych projektów zalecam użycia narzędzi typu Webpack, Rollup czy Vite"
            },
            cra: {
                header: "Create React App (CRA) - Przygotowanie projektu",
                content: "Używając narzędzia CRA utworzenie projektu 'framework-hero' wymaga jedynie wykonania poniższej komendy:",
                content2: "Skrytp ten generuje podstawowy projekt SPA oparty o framework React. Wygenerowaną strukturę plików można podzielić na 4 sekecje:",
                section: {
                    node: "node_modules - Folder zawierający zwenętrzne zależności",
                    public: "public - Folder z zasobami statycznymi (obrazki, czcionki, itd.)",
                    source: "src - Głowny folder zawierający kod aplikacji",
                    root: "Oraz katalog nadrzędny w którym znajduję się plik 'package.json' oraz reszta plików konfiguracyjnych dla środowiska (tsconfig.js, itd.)"
                },
                content3: "W zależności od wielkości projektu oraz preferencji deweloperów struktura katalgów wewenątrz 'src' może się znacząco różnić. Osobiście polecam zapoznać się z różnymi 'dobrymi praktykami' związanymi z tworzeniem struktry folderów. React nie wymusza stosowania się konkretnej struktury, co może prowadzić do bałaganu lub ograniczeniu możliwości rozszerzania kodu. Dlatego warto jest zachowywć porządek i odpowiednio wydzielać moduły oraz komponenty."
            },
            craTs: {
                header: "Create React App - Typescript",
                content: "Jak już wspomniałem wcześniej, porządek w strukturze plików pozwala łatwiej utrzymywać twój projekt. React domyślnie jest biblioteką JavaScriptową, dzięki czemu łatwiej jest zacząć tworzyć pierwsze aplikacje. Jednak im bardziej projekt rośnie tym więcej pojawia się różnych zależności, które łatwiej jest utrzymać stosując programowanie obiektowe, czy chociaż wymuszając strukturę danych poprzez typowanie oraz interfejsy. Dzięki takiemu zabiegowi można wprowadzać bardziej złożone wzorce projektowe do aplikacji upraszczając przy tym proces tworzenia aplikacji.",
                content2: "TypeScript pozwala na rozszerzenie funkcjonalności języka JavaScript dzięki czemu nasza aplikacja napisana w React jest mniej podatna na głupie błędy wynikające z niedopatrzenia jakiego typu dane otrzymujemy od użytkownika, czy z interfejsu API. Wymaga to od dewelopera większego pilnowania struktury swojego kodu, jednak późniejsze szukanie błędów, czy rozszerzanie funkcjonalności jest znacznie przyjemniejsze.",
                content3: "Dodanie obsługi języka TypeScript jest opcjonalne i może być dodane w dowolnej fazie projektu. Jednakże w przypadku tworzenia takiego projektu od zera wystarczy dodać dotatkowy parametr do skryptu inicjalizującego:",
                content4: "Wygenerowana struktura plików dla projektu TypeScript jest identyczna. Różnicą są rozszerzenia plików oraz plik konfiguracyjny dla obsługi języka 'tsconfig.json'. Docelowo zbudowany projekt jest kompilowany do plików JavaScript tak jak to było w poprzednim przypadku."
            },
            run: {
                header: "CRA - Uruchominie serwera deweloperskiego",
                content: "Korzystając z narzędzia 'Create React App' z automatu dostajemy skonfigurowany serwer deweloperski. Skrypt uruchamiający jest dołączony do pliku 'package.json' dzięki czemu uruchomienie aplikacji i podgląd 'na żywo' można uruchomić jednym poleceniem:"
            },
            other: {
                header: "Inne narzędzia",
                content: "Przytoczony powyżej przykład ma za zadanie wprowadzić użytkownika do tworzenia aplikacji React. Jednak środowisko aplikacji webowych jest bardzo dynamiczne i zmienia się bardzo szybko. Bardziej zaawansowanym i uniwersalnym narzędziem pozwalającym na budowanie i tworzenie projektów obecnie jest Webpack. Zadaniem CRA jest szybkie przygotowanie środowiska do pracy nad aplikacją. Moim celem było przybliżenie jedynie jak można zainicjalizować prosty projekt, który będzie tworzony w oparciu o framework React oraz jak to wygląda w zestawieniu z Angularem czy Vue.js"
            }
        },
        basic: {
            intro: {
                header: "Wprowadzenie do komponentów",
                content: "React jest zbudowany z 'Elementów', które są najmniejszymi budulcami aplikacji. Element może być częścią czegoś większego, co można nazwać „komponentem”. React elementem może być przykładowo paragraf, nagłówek, sekcja czy inny znany znacznik HTMLowy, ale mogą to być również inne obiekty z biblioteki 'React'. Połączone elementy mogą tworzyć bardziej złożone struktury jakim są komponenty, z których później można tworzyć inne większe komponenty, aż po całe strony czy bardziej złożone struktury.",
                content2: "Biblioteka React do wersji 17 używała metody ReactDOM.render() a od wersji 18 ReactDOM.createRoot() aby wyrenderować podany przez nas element do drzewka DOM docelowej strony.",
                content3: "Termin „komponent” jest bardzo często używany obecnie przy tworzeniu stron internetowych. W React jest to obiekt JavaScriptowy zawierający pewien zbiór elementów oraz funkcji, który dodatkowo może przyjmować pewne zwenętrzne właściwości zwracając ostatecznie wyrenderowany ReactElement. Komponent można zdefiniować poprzez rozszerzenie klasy 'React.Component' tworząc w ten sposób 'Komponent Klasowy', lub poprzez utworzenie funkcji która będzie docelowo zwracać ReactElement co nazywane jest 'Komponentem Funkcyjnym'. React wprowadza nowy rodzaj składni JSX (JavaScript XML) pozwalającej na pisanie kodu HTML wewnątrz języka JavaScript.",
            },
            sfc: {
                header: "Single File Component (Jeden plik na komponent)",
                content: "W poprzedniej sekcji wspominałem o porządku w strukturze plików, dzięki której łatwiej jest rozszerzać kod naszej aplikacji. W framewokru React jeden komponent powinny być zdefiniowany w pojedynczym pliku '.jsx' lub '.tsx' (dla komponentów napisanych w TypeScript). Nazwy plików zawierających komponenty powinny być pisane według notacji PascalCase.",
                classComponent: {
                    header: "Komponenty klasowe",
                    content: "Przed wprowadzeniem wersji 16.8 Reacta komponenty klasowe były jedynym sposobem na zarządzaniem stanem czy cyklem życia komponentów. Wcześniej komponenty funkcyjne traktowano jako bezstanowe. Obecnie jednak komponenty klasowe są powoli wypierane z powodu ich złożonej składni, lecz należy wiedzieć jak takie komponenty się tworzy.",
                    content2: "Komponent klasowy jest rodzajem zwykłej klasy JavaScript, która rozszerza klasę 'React.Component'. Każdy komponent musi zwracać ReactElement, więc w tym celu, aby wyrenderować kod HTML należy zdefiniować metodę 'render()', która będzie zwracać strukturę napisaną przy uzyciu składni JSX.",
                    content3: "Komponenty klasowe potrafią zarządzać stanem komponentu, czy mogą implementować własną logikę zdarzeń wywołanych podczas różnych etapów cyklu życia komponentu takie jak 'componentDidMount' itd. Dodatkowo możemy inicjalizować bieżący stan wykorzystując konstruktor.",
                    ts: {
                        header: "Komponent klasowy - Typescript",
                        content: "Dzięki wprowadzeniu mocnego typowania do Reacta (poprzez używanie TypeScriptu) dużo łatwiej jest zobaczyć jakie właściwości przyjmuje dany komponent, albo jakie właściwości są zdefiniowane w danym komponentcie poprzez wprowadzenie interfejsów. Klasa nadal rozszerza 'React.Component', jednak w tym przypadku należy podać jakiego typu dane wejściowe otrzymuje oraz jake właściwości stanu definiuje nasz komponent."
                    }
                },
                functionComponent: {
                    header: "Komponenty funkcyjne",
                    content: "Framework React pozwala na definiowanie komponentów za pomocą funkcji. Na dobrą sprawę są to zwykłe funkcje JavaScript, które zwracają React.Element i mogą przyjmować różne właściwości. Od wersji 16.8 biblioteki React te komponenty mogą obsługiwać metody aktualizacji stanu i cyklu życia. Wcześniej służyły one tylko i wyłącznie do celów prezentacyjnych. Obecnie są podstawowymi elementami z których buduje się aplikacje. Są one łatwiejsze do odczytania czy testowania i często zawierają mniej kodu.",
                    content2: "Taki sam komponent można zapisac 'czyściej' stosując składnę ECMA Script 6 (ES6), wykorzystując funkcję anonimową przypisaną do zmiennej.",
                    content3: "Funkcjonalnie powyższy komponent działa tak samo jak komponent klasowy. Najwiekszą różnicą jest uproszczona składnia i pozbycie się wielu niepotrzebnych słów kluczowych takich jak 'this' czy 'props' dzięki czemu kod dużego komponentu jest znacznie bardziej czytelny.",
                    ts: {
                        header: "Komponent funkcyjny - Typescript",
                        content: "Podczas korzystania z TypeScript przy komponentach funkcyjnych nie musimy dostarczać interfejsu definującego 'State' (stan), dzięki czemu jest mniej kodu do utrzymywania."
                    }
                }
            },
            usage: {
                header: "Używanie komponentów",
                content: "Aby wyrenderować utworznony przez nas komponent należy podać jego nazwę w formie tagu elementu JSX.",
                content2: "Ponieważ obecnie przy tworzeniu komponentów React wykorzystuje się komponenty funkcyjne - dalsza część tego przykładu będzie opierać się właśnie z wykorzystaniem tego podejścia."
            }
        },
        props: {
            intro: {
                header: "Komponent - właściwości, metody i parametry",
                content: "Komponenty React są obiektami które mogą mieć pewne wewnętrzne właściwości oraz metody. Dodatkowo mogą przyjmować zewnętrzne dane poprzez parametry (eng. 'props'), które wywoływane są podobnie jak atrybuty w elementach HTML.",
            },
            internal: {
                header: "Właściwości - dane stanu komponentu",
                content: "Każdy komponent może mieć swoje własne właściwości danych stanu. Dane stanu trzymają wartości zmiennych w pamięci, dzięki czemu możemy zapisywać wartości  komponentu i zapewniać bardziej złożoną logikę biznesową.",
                content2: "Komponenty funkcyjne od wersji 16.8 otrzymały nową metodę 'useState()' pozwalającą na wprowadzenie stanu do tych komponentów. Zmienne w ten sposób zdeklarowane zachowują wszelkie zalety reaktywności komponentu, czyli przypisanie nowej wartości do zmiennej spowoduje przerenderowanie zawartości komponentu, tak żeby bieżąca wartość była widoczna. Poniższy przykład demonstruje jak zdefiniować właściwość 'welcomeMessage' wraz z 'setterem' czyli funkcją pozwalającą na zmianę stanu tej właściwości ('setWelcomeMessage') z wykorzystaniem funkcji 'useState()'. Funkcja ta zwraca tablicę zmiennych [a, b], gdzie 'a' jest reaktywną właściwością, a 'b' jest metodą ustawiającą wartość (wspomniany setter). W dalszej częsci kodu podawana jest wartość początkowa dla tej właściwości jako argument funkcji 'useState()'. Wywołanie zmiennej w kodzie JSX bazuje na wprowadzniu nazwy zmiennej w nawiasy klamrowe '{ }'.  Dzięki temu podczas renderowania zwracany jest nagłówek z treścią 'Hello from State example'. Poniższy przykład przedstawia przykładowy komponent napisany w TypeScript. Wersja JavaScript nie przyjmuje wyrażeń określających typ.",
                content3: "W przypadku komponentów klasowych definiowanie właściwości stanu jest bardziej złożone. Odbywa się ono w trakcie tworzenia obiektu przy wywołaniu konstruktora. Należy zdefiniować obiekt 'state' poprzez dodanie własnych właściwości. Również w tym miejscu definiowane są wartości początkowe. Istotne w tym przypadku jest przekazywanie parametrów 'propsów' do konstruktora i wywołanie metody nadrzędnej z przekazaniem tego argumentu.",
                content4: "Poniżej przedstawiony został komponent klasowy napisany w języku TypeScript:"
            },
            methods: {
                header: "Metody",
                content: "W przypadku komponentów funkcyjnych jak i komponentów klasowych definiowanie metod nie wymaga specjalnej składni. Metody w komponentach klasowych wyglądają tak samo jak to ma miejsce w klasycznych klasach JavaScript (przykładem jest wymagana metoda 'render()'), natomiast w przypadku komponentów funkcyjnych można je zdefiniować jako zwykła funkcja lub przypisać funkcję anonimową do zmiennej."
            },
            props: {
                header: "Parametry",
                content: "Parametrami ('props') nazywane są zwenętrzne właściwości komponentu. Pozwalają one przekazywać argumenty z rodzica do komponentu docelowego (nazywanego dzieckiem). W przypadku JSX parametry przekazywane są w formacie atrybutów XML podobnie jak w przypadku zwykłych elementów HTML. Argumenty domyślnie są przekazywane jak typ 'string'.",
                content2: "W przypadku komponentów funkcyjnych wystarczy wskazać parametr na wejściu, aby móc później z niego korzystać w kodzie. Dobrą praktyką jest wykorzystywanie operatora destrukturyzacji (ang. destructuring assignment) w celu wyciągnięcia właściwych nazw parametrów.",
                content3: "Inaczej wygląda to w przypadku komponentów klasowych. W tym przypadku parametry przekazywane są poprzez konstruktor. Ważne jest, aby wywołać konstruktor metody nadrzędnej z wywołaniem otrzymanych argumentów.",
                content4: "Opakowując to przy użyciu TypeScript komponent klasowy nie musimy już wywoływać konstruktora w celu zainicjalizowania parametrów. Dzięki czemu kod może wyglądać w następujący sposób:",
                variables: {
                    header: "Przekazywanie zmiennych",
                    content: "Parametry mogą przyjmować dowolny typ. Przekazanie innych typów niż 'string' w JSX wymaga wrzucenia w klamry kod JavaScript reprezentujący dany obiekt, lub zmienną."
                }
            },
            events: {
                header: "Emitowanie zdarzeń",
                content: "W bibliotece React nie ma czegoś takiego jak 'emitowanie zdarzeń'. Tutaj stosowane jest podejście z przekazywaniem własnego argumentu do obsługi zdarzeń (eventHandler) do dziecka poprzez parametry. W komponencie dzieka przy definicji parametrów wejściowych należy również podać te które mają być funkcją zwrotną (ang. callback function). To podejście jest znacząco inne niż w przypadku omawianych frameworków takich jak Angular czy Vue. W uproszczeniu to komponent dziecka wywołuje metodę z parametru, która w komponencie rodzica może być obsłużona.",
                content2: "W momencie kliknięcia na przycisk 'Increase number' (1) przechwytywane jest zdarzenie 'click' poprzez metodę 'onClick', która w momencie wywołania wykonuje wewnętrzną funkcję komponentu 'increaseNumber()'. Wtedy przechwytywane jest zdarzenie (2) mające za zadanie zmianę stanu komponentu i zwiekszenie wartości właściwości 'currentValue' o jeden. Ponieważ przytoczony został przykład z komponentem funkcyjnym należy dodać zaczep (ang. hook) stanu 'useEffect()' nasłuchujący na zmianę wartości właściwości '[currentValue]'. W momencie zmiany wartości tego stanu (3) wywoływana jest funckja zwrotna przekazaną poprzez parametr 'increasedEvent' z bieżącą wartością stanu przekazaną jako argument. Podejście z wykorzystaniem zaczepu 'useEffect()' jest specyficzne dla komponentów funkcyjnych. Gdybyśmy chcieli wywołać parametr 'increasedEvent' wewnątrz metody 'increaseNumber' zaraz po linijce 'setCurrentValue(...)' rodzic otrzymałby poprzednią wartość stanu. Jest to spowodowane tym, że wywołanie settera 'setCurrentValue' jest zdarzeniem asynchronicznym.",
                content3: "W przypadku TypeScript ważne jest odpowiednie zdefiniowanie interfejsu. Parametr 'increasedEvent' jest funkcją anonimową, która przyjmuje argumenty typu 'number'. W powyższym przykładznie uproszczone zostało również wywołanie metody 'increaseNumber' na przycisku. Zabieg ten jest możliwy ponieważ na wywołanie funkcji 'onClick' chcemy również wywołać funckję 'increaseNumber', której parametry wejściowe wzajemnie się pokrywają (lub tak jak w tym przypadku są pomijane).",
                content4: "Komponent rodzica będzie działać na podobnej zasadzie jak w tym momencie pracowaliśmy podczas obsługi zdarzeń wywołanych przez przycisk. W rodzicu również wystarczy, że obsłużymy wywołanie przychodzące z parametru 'increasedEvent'. Tym razem jednak przechwytujemy 'event' wygenerowany przez komponent dziecka i jego wartość przekazujemy do wewnętrznej funckji 'onIncreased'."

            }
            
            

        },
        lifecycle: {
            hooks: {
                header: "Cykl życia komponentu - zaczepy",
                content: "Zaczepy cyklu życia komponentów (ang. component lifecycle hooks) to interfejsy pozwalające na napisanie swoich własnych funkcji które wywołają się w określonym momencie życia komponentu. Najczęściej zdarzenia emitowane są podczas tworzenia, modyfikacji, albo tuż przed zniszczeniem komponetu. Wraz z Reactem w wersji 16.8 dodane zostałe zaczepy do komponentów funkcyjnych. Wcześniej ich obłużenie było możliwe jedynie wykorzystując komponenty klasowe."
            },
            mount: {
                header: "Tworzenie",
                content: "Ten zaczep uruchamia się tylko raz podczas inicjalizacji komponentów. Różnica pomiędzy tym zaczepem a wywołaniem procesu inicjalizacji komponentu w konstruktorze jest znacząca, ponieważ funkcja zaczepu wywoływana jest po wyrenderowaniu komponentu. Czyli z poziomu tej funkcji jesteśmy w stanie operować na elementach drzewka DOM. Najczęściej jednak ten zaczep jest przydatny do pobierania początkowych danych z zewnętrznych źródeł i zapisywania ich do właściwości danych stanu.",
                content2: "W komponentach funkcyjnych stosuje się metodę 'useEffect(fn, args)', która przyjmuje dwa argumenty. Pierwszym z nich jest funkcja sprzężenia zwrotnego (fn), wewnątrz której definiujemy co ma się wykonać. Drugi argument (args) określa nasłuchiwanie na zmianę stanu tego komponentu. W przypadku inicjalizacji podawana jest pusta tablica ('[]'). Dzięki temu nie nasłuchujemy na żadnej właściwości, ale i tak raz wywołamy ten zaczep.",
                content3: "Komponenty klasowe mają prostszą składnię ponieważ wystarczy przeciążyć funkcję 'componentDidMount()':"
            },
            update: {
                header: "Aktualizacja",
                content: "Zaczep aktualizacji wywoływany jest każdorazowo przy każdej aktualizacji stanu komponentu. Zbyt wiele aktualizacji może powodować problemy z wydajnością. Dlatego bardzo ważne jest, aby używać go ostrożnie. Tak jak w poprzednim przypadku w komponencie funkcyjnym, wywołujemy funkcję zaczepu 'useEffect()'. Tym razem jako drugi argument podawana jest tablica ze zmienną, która ma być obserwowana.",
                content2: "W komponentach klasowych należy zdefiniować metodę o nazwie 'componentDidUpdate'. Metoda ta otrzymuje dwa parametry: poprzednie właściwości i poprzednie właściwości danych stanu. Możemy więc sprawdzić, czy konkretna wartość właściwości lub stanu uległa zmianie i zareagować na to zdarzenie. Na przykład możemy pobrać nową listę zdjęć za każdym razem, gdy zmieni się właściwość GalleryID.",
                content3: "Jak widać metoda useEffect jest prostsza i czyni kod bardziej czytelnym. Ma jednak znaczącą wadę. Używając jej nie jesteśmy w stanie uzyskać dostępu do poprzednich wartości właściwości czy stanu."

            },
            delete: {
                header: "Usuwanie",
                content: "Na koniec została metoda wywoływana tuż przed usunięciem lub odmontowaniem komponentu. Tak jak metoda inicjalizująca jest ona wywoływana tylko raz w trakcie życia komponentu. Ten zaczep można wykorzystać w celu wyczyszczenia danych komponentu (interwałów, czy funkcji timeout). W tym celu wykorzystywana jest metoda 'componentWillUnmout()'",
                content2: "Niestety nie jest ona dostępna dla komponentów funkcyjnych."
            }
        },
        service: {
            provider: {
                header: "Serwisy i konteksty",
                content:"Wielką zaletą frameworków takich jak React jest możliwość stosowania paradygmatu odwróconego sterowania (ang. Inversion of Control, IoC). W idealnym świecie komponent powinien zajmować się głównie warstwą prezentacji i przedstawiać użytkownikowi końcowemu jedynie stan aplikacji. W tym celu można wyciągać logikę biznesową do zewnętrznych klas, dzięki czemu łatwiej jest zachować porządek w aplikacji zapweniając elastyczność kodu. Klasy mające jasno zdefiniowany cel, zapewniające konkretną logikę można nazwać serwisami. W serwisach można obsługiwać pobieranie danych z zewnętrznego serwera, lub sprawdzać poprawność wporwadzanych danych.",
                content2: "Framework React wprowadza pojęcie 'Kontekstu', dzięki któremu zamiast przekazywać dane z góry w dół poprzez właściwości możemy współdzielić pewne właściwości przez wiele komponentów bez konieczności ich przekazywania z rodzica do dziecka. Kontekst za za zadanie współdzielić pewien zakres danych, który dla wszystkich dzieci na różnym poziomie zagnieżdżenia ma być uznawany za globalny.",
                content3: "Kontekst jest Reactową wersją Angularowych 'Serwisów', z tą różnicą, że są one dołączane do struktury aplikacji poprzez komponenty 'dostawców' (ang. Provider). W Angularze serwisy są dostarczane do komponentów poprzez wstrzykiwanie zależności (ang. Dependency Injection, DI). Dzięki tym technikom kod staje się luźno powiązany i dużo łatwiej jest tworzyć testowalne komponenty co ułatwia znacząco programowanie sterowane testami (ang. test driven development).",
                content4: "Serwisy można spotkać nie tylko w Angularze, ale również w innych językach zorientowanych na programowanie obiektowe. Największy zysk z korzystania z serwisów widać dopiero przy większych aplikacjach, a dodatkowo korzystanie z TypeScriptu znacząco ułatwia dalszy rozwój aplikacji. Używając Reacta pomimo braku 'Serwisów' nic nie stoi na przeszkodzie, żeby taką koncepcję wprowadzić. Serwisem możemy nazwać pewną klasę abstrakcyjną, lub interfejs według, którego możemy tworzyć konkretnych dostawców zapewniających daną funkcjonalność. Kontekst może implementować ten serwis, a w kodzie klienckim możemy do niego przypisać konkretnych dostawców.",
                content5: "Przykładowo powyższy interfejs definiujący 'PhotoGalleryService' okerśla podstawowe metody służące do obsługi logiki biznesowej mającej na celu odczyt oraz tworzenie galerii obrazów.",
                content6: "Klasa dostawcy 'PhotoGalleryApiProvider' jest konkretną implementacją wcześniej zdefiniowanego interfejsu 'PhotoGalleryService'. Dostarcza ona dane poszczególnych galerii poprzez zapytania HTTP wysłane do serwera dostarczającego interfejs REST API. Dzięki temu zabiegowi logika odpowiedzialna za pobieranie danych z zewnętrznego źródła znajduje się w jednym miejscu i nawet jeśli wiele komponentów miałoby korzystać z tych metod to zachowana jest zasada jednej odpowiedzialności (ang. single responsibility principle). Takiego dostawcę łatwo jest później zamockować podczas testów jednostkowych.",
                content7: "Teraz jesteśmy gotowi do utworzenia kontekstu i dodania go do naszej aplikacji. 'PhotoGalleryContext.Provider' przyjmuje parametr 'value' który określa jaki obiekt będzie dostępny dla wszystkich komponentów potomnych.",
                content8: "Aby prawidłowo obsługiwać dostawcę należy w komponencie dziecka skorzystac z funkcji 'React.useContext()' podając jako argument interesujący nas kontekst. Ten komponent w którym sięgamy po kontekst nazywamy konsumentem (ang. consumer).",
                content9: "Teraz dzięki temu zabiegowi nie musimy przekazywać parametrów przez wysztkie komponenty od góry do dołu, ale w odpowiednim momencie możemy je wywołać odwołując się przez zmienną 'galleryService'. W ten sposób dostarczamy logikę biznesową do naszej aplikacji, którą możemy w łatwy sposób zaprezentować użytkownikowi poprzez wartstwę prezentacji."

            }
        }
    }
}

export default translations