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
                    content: "Są to zwykłe funkcje JavaScript, które zwracają React.Element i mogą przyjmować różne właściwości. Od wersji 16.8 biblioteki React te komponenty mogą obsługiwać metody aktualizacji stanu i cyklu życia. Wcześniej służyły one tylko i wyłącznie do celów prezentacyjnych. Obecnie są podstawowymi elementami z których buduje się aplikacje. Są one łatwiejsze do odczytania czy testowania i często zawierają mniej kodu.",
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
                header: "",
                content: "",
            },
            
            

        }
    }
}

export default translations