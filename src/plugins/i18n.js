import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'rs',
    fallbackLocale: 'en',
    messages: {
        en: {
            navigation: {
                home: 'Home',
                shop: 'Shop',
                earrings: 'Earrings',
                necklaces: 'Necklaces',
                rings: 'Rings',
                other: 'Accessories',
                blog: 'Blog',
                about: 'About',
                contact: 'Contact'
            },
            shoppingCart: {
                shoppingCart: 'Shopping cart',
                product: 'Product',
                name: 'Name',
                price: 'Price',
                quantity: 'Quantity',
                stock: 'Stock',
                keepShopping: 'Keep shopping',
                checkout: 'Checkout',
                total: 'Total',
                cart: 'Cart',
                empty: 'Your cart is empty.',
                shipped: 'We will send you mail once we have shipped your package.',
                thanksForBuying: 'Thank you for buying P.L.E.M.E jewelry!',
                deliveryTime: 'Usually time for your package to arrive is around 1-3 days.',
                patient: 'Please be patient!'
            },
            homePage: {
                latestArrival: 'LATEST ARRIVALS',
                chainDropEarring: 'Chain Drop Earring',
                experienceCollection: 'Experience the entire Collection',
                twisted: "Woman's Day Collection From Us",
                byPleme: 'by P.L.E.M.E',
                levelUp: 'Level Up Your Jewelry Game',
                discover: 'Discover',
                mostWanted: 'MOST WANTED'
            },
            bottomNavigation: {
                contactUs: 'Contact Us',
                onlineService: 'Online Shop Service',
                shippingReturns: 'Shipping and returns',
                privacyPolicy: 'Privacy Policy',
                jewelryCare: 'Jewelry Care',
                contact: 'Contact',
                follow: 'Follow Us',
                copyright: 'COPYRIGHT'
            },
            mostWanted: {
                outOfStock: 'Out of Stock',
                addToCart: 'Add to Cart',
                recommendations: 'RECOMMENDATIONS FOR YOU',
                prev: 'Previous',
                next: 'Next',
                shopAll: 'SHOP ALL',
                addedToCart: 'View Cart'
            },
            singleProduct: {
                currency: 'rsd.',
                description: 'Description',
                details: 'Details',
                title: 'Title',
                material: 'Material',
                weight: 'Weight',
                height: 'Height',
                size: 'Size',
                color: 'Color',
                width: 'Width',
                size: 'Size'
            },
            accessories: {
                refineBy: 'Refine by',
                search: 'Search by name',
                all: 'All',
                goldStud: 'Gold stud earrings',
                goldDrop: 'Gold drop earrings',
                goldNecklace: 'Gold necklaces',
                silverNecklace: 'Silver necklaces',
                rings: 'Rings',
                necklaces: 'Necklaces',
                accessories: 'Accessories'
            },
            about: {
                aboutUs: 'ABOUT US',
                aboutStory: 'P.L.E.M.E was born in 2018 in Bosnia & Herzegovina with the enthusiasm of designing a simple, day to day, feminine jewelry. We bet on a minimalistic approach with a touch of boldness. Following trends, we establish our own with geometric designs and collections in constant growth. The goal of P.L.E.M.E is to design small treasures for all women providing a daily dose of luxury.',
                story: 'THE STORY',
                theStory: 'P.L.E.M.E embraces a kind of femininity that escapes from conventions: built upon a set of powerful beliefs, we seek to redefine what it means to be a woman: a duality of forces that, far from being antagonistic, coexist in balance. We believe in women’s self-expression making us strive to exceed expectations by creating unique trend-setting jewels, along with a remarkable design. Every collection manifests the creation of a new world, designed for today’s women: elegant, simple and independent.',
                behind: 'BEHIND',
                behindStory: 'P.L.E.M.E was born in 2018 in Bosnia & Herzegovina with the enthusiasm of designing a simple, day to day, feminine jewelry. We bet on a minimalistic approach with a touch of boldness. Following trends, we establish our own with geometric designs and collections in constant growth. The goal of P.L.E.M.E is to design small treasures for all women providing a daily dose of luxury.',
                commitment: 'Our commitment with women’s empowerment is the core of P.L.E.M.E. Strength, confidence, courage: the values we stand for and the ones we aspire to instil in every woman that trusts us, day after day.'
            },
            contact: {
                needHelp: 'NEED HELP',
                doubt: 'Do you have any doubt or need help with something? We are here to help.',
                signUp: 'Sign Up',
                signIn: 'Sign In',
                logOut: 'Log Out',
                findOut: 'GET ON THE LIST TO FIND OUT',
                inside: 'What’s inside? New arrivals, exclusive sales, inspiration and much more.',
                thanksForSigningUp: 'Thank you for signing up. From today you will be the first to know it ALL.',
                welcome: 'WELCOME!',
                touch: 'Get In Touch',
                service: 'Service Hours',
                days: 'Monday - Friday',
                hours: '09 pm : 06 am'
            },
            signUp: {
                touch: 'Get In Touch',
                mail: 'Mail',
                password: 'Password',
                confirm: 'Confirm Password',
                accept: 'Accept Terms of Use',
                submit: 'Submit',
                subscribeHeading: "Subscribe to Our NewsLetter",
                subscribeButton: "SUBSCRIBE",
                resetPassword: "Email has been sent to you, please check and verify!"
            },
            validations: {
                validEmail: 'Please provide a valid email address.',
                required: 'This field is required.',
                validPassword: 'Password must be at least ',
                char: 'characters.',
                validConfirm: 'Your password is not equal.',
                validPhone: 'You can enter onlz numbers.'
            },
            shippingDetails: {
                shippingInfo: 'Shipping Informations',
                firstName: 'First name',
                lastName: 'Last name',
                address: 'Address',
                city: 'City',
                country: 'Country',
                zip: 'Zip Code',
                phoneNumber: 'Phone Number',
                serbia: 'Serbia',
                bosnia: 'Bosnia and Herzegovina'
            },
            jewelryCare: {
                howToClean: 'CLEANING JEWELERY',
                howToStore: 'HOW TO STORE JEWELRY',
                cleaning: 'Cleaning your jewelry - Pour a small amount of mild soap into lukewarm water and use a small, soft toothbrush to clean your jewellery. Toothbrushes are ideal for cleaning jewellery with intricate details, which can otherwise be difficult to clean. If the dirt is hard to remove, soak the jewelry in clean water. If your sterling silver jewellery has become dull, a silver-polishing cloth is a great tool to make it shine again. However, it will not remove scratches.',
                store: 'Jewelry should be stored away from direct sunlight and heat, in a protective (lined) jewellery box or a tarnish-resistant pouch. It can also be stored in a plastic zip lock bag made of polyethylene. Never use polyvinyl plastic bags, such as trash can liners, as they contain sulphur compounds, or rubber containers which will make sterling silver tarnish faster and possibly turn black. Do not store your jewelry in the bathroom or any other humid places. Please note that our PLEME boxes are not made for long-term storage as they are not airtight and tarnishing will occur over time.'
            },
            shippingReturns: {
                shipping: 'SHIPPING',
                shippingText: 'We dispatch all orders from Novi Sad, Serbia. We aim to ship your order the next business day after purchase - This excluding weekends and public holidays.',
                shippingOptions: 'Shipping Options',
                option1: 'Standard shipping within Serbia',
                option2: 'Fast shipping within Serbia',
                option3: 'Fast shipping within Bosnia and Herzegovina',
                delay: ' Please note that your order may be delayed by circumstances beyond our control. If you need your order quickly, please select express shipping on checkout.',
                delayImportant: '*From time to time orders may be delayed in customs. This is beyond our control and we do our best to make sure everything goes smoothly',
                returns: 'RETURNS AND EXCHANGES',
                returnText: 'We understand shopping online can be tricky sometimes ......That is why we will happily exchange unworn items for an alternate size or finish within 14 days of purchase. Please note: We do not provide exchanges/refunds on pierced jewellery- Earrings due to hygiene reasons. If you would like to return an item after you are entitled to an exchange or store credit. We can only give refunds on faulty items.',
                note: 'Please note',
                note1: 'We will only swap or exchange items if we have them in stock, otherwise, a store credit will be issued.',
                note2: 'The item(s) returned must be in the orginal packaging and undamaged.',
                note3: 'We do not pay for returns to be shipped back to us at Pleme.',
                note4: 'Sorry, no refunds or exchanges on sale items or earrings due to health and safety regulations.',
                note5: 'For returns on faulty items, you will be refunded in full, minus all shipping charges.',
                note6: 'We reserve the right to deny unreasonable repairs, returns, and exchanges.'
            },
            headings: {
                ring1: 'RINGS',
                ring2: 'Discover our ring universe. Mix, play and shine.',
                earring1: 'EARRINGS',
                earring2: 'Get the latest arrivals. Explore our collection of earrings.',
                necklace1: 'NECKLACES',
                necklace2: 'Explore our new styles. Level up your necklace game.',
                other1: 'P.L.E.M.E',
                other2: 'Jewelry meets purpose.'
            },
            offers: {
                quality: 'Handmade jewelry with premimum quality.',
                safe: 'Safe and secure shipping.',
                delivery: 'Fast delivery.',
                shipping: 'Free shipping from 3 products or more.'
            }
        },
        rs: {
            navigation: {
                home: 'Početna',
                shop: 'Shop',
                earrings: 'Minđuše',
                necklaces: 'Lančići',
                rings: 'Prstenje',
                other: 'Aksesoari',
                blog: 'Blog',
                about: 'O nama',
                contact: 'Kontakt',
                total: 'Ukupno'
            },
            shoppingCart: {
                shoppingCart: 'Korpa',
                product: 'Proizvod',
                name: 'Naziv',
                price: 'Cijena',
                quantity: 'Količina',
                stock: 'Stanje',
                keepShopping: 'Nastavi kupovinu',
                checkout: 'Završi kupovinu',
                cart: 'Korpa',
                empty: 'Vaša korpa je prazna.',
                shipped: 'Poslaćemo vam mejl potvrde nakon što pošaljemo paket.',
                thanksForBuying: 'Hvala vam što kupujete P.L.E.M.E nakit!',
                deliveryTime: 'Uobičajeno vrijeme isporuke vašeg paketa je između 1-3 dana.',
                patient: 'Molimo Vas da budete strpljivi!'
            },
            homePage: {
                latestArrival: 'NAJNOVIJI PROIZVODI',
                chainDropEarring: 'Chain Drop Earring',
                experienceCollection: 'Istraži Cijelu Kolekciju',
                twisted: "8. Mart",
                byPleme: 'P.L.E.M.E',
                levelUp: 'Podigni svoj nakit na viši nivo',
                discover: 'Istraži',
                mostWanted: 'NAJJTRAŽENIJI PROIZVODI'
            },
            bottomNavigation: {
                contactUs: 'Kontaktiraj nas',
                onlineService: 'Online Kupovina',
                shippingReturns: 'Slanje i vraćanje proizvoda',
                privacyPolicy: 'Privatna Polisa',
                jewelryCare: 'Kako brinuti o nakitu?',
                contact: 'Kontakt',
                follow: 'Zaprati nas',
                copyright: 'SVA PRAVA ZADRŽAVA'
            },
            mostWanted: {
                outOfStock: 'Nema na stanju',
                addToCart: 'Dodaj u korpu',
                recommendations: 'PREPORUČUJEMO ZA TEBE',
                prev: 'Prethodna',
                next: 'Posljednja',
                shopAll: 'POGLEDAJ SVE',
                addedToCart: 'Pogledaj korpu'
            },
            singleProduct: {
                currency: 'rsd.',
                description: 'Opis',
                details: 'Detalji',
                title: 'Naziv',
                material: 'Materijal',
                weight: 'Težina',
                height: 'Dužina',
                size: 'Veličina',
                color: 'Boja',
                width: 'Širina',
                size: 'Veličina'
            },
            accessories: {
                refineBy: 'Sortiraj po',
                search: 'Search by name',
                all: 'Svi prozivodi',
                goldStud: 'Gold stud minđuše',
                goldDrop: 'Gold drop minđuše',
                goldNecklace: 'Zlatni lančići',
                silverNecklace: 'Srebrni lančići',
                rings: 'Prstenje',
                necklaces: 'Lančići',
                accessories: 'Aksesoari'
            },
            about: {
                aboutUs: 'O NAMA',
                aboutStory: 'P.L.E.M.E je nastalo 2018 u Bosni i Hercegovini sa entuzijazmom dizajniranja jednostavnog, za svaki dan, ženskog nakita. Mi ciljamo na minimalistički pristup sa notom čvrstine. Prateći trendove, mi izgrađujmo naš sopstveni stil sa geometrisjkim dizajnom i kolekcijama u konstantnom usponu. Cilj P.L.E.M.E brenda je da dizajniramo malo blago za sve žene, obezbjeđujući dnevnu dozu luksuza.',
                story: 'PRIČA',
                theStory: 'P.L.E.M.E obuhvata neku vrstu ženstvenosti koja izmiče konvencijama: sagrađena na moćnim vjerovanjima, nastojimo definisati šta to znači biti žena: dualnost sila koje, daleko od toga da su antagonističke, opstaju u ravnoteži. Vjerujemo u žensko samoizražavanje koje nas tjera da težimo da nadmašimo očekivanja stvaranjem jedinstvenih dragulja koje postavljaju trend, zajedno sa izvanrednim dizajnom. Svaka kolekcija manifestuje stvaranje novog svijeta, namijenjenog današnjim ženama: elegantnog, jednostavnog i nezavisnog.',
                behind: 'PRIČA KOJA STOJI IZA',
                behindStory: 'P.L.E.M.E je rezultat balansirane kombinacije kreativnog dizajna i strasti: mladi tim koji radi zajedno kako bi vam obezbjedio najbolje iskustvo, proizvode i servis. Od dizajna, preko proizvodnje i isporuke nakita, svaka faza je pažljivo organizovana tako da se osjećate posebno dok nosite naše malo blago.',
                commitment: 'Naše opredjeljenje za osnaživanje žena je cilj P.L.E.M.E. brenda. Snaga, samopouzdanje, hrabrost: vrijednosti za koje se zalažemo i one koje težimo da usadimo u svaku ženu koja nam vjeruje, iz dana u dan.'
            },
            contact: {
                needHelp: 'Potrebna Vam je pomoć?',
                doubt: 'Imate neku nedoumicu ili Vam treba pomoć u vezi sa nečim? Tu smo da pomognemo.',
                signUp: 'Prijavi Se',
                signIn: 'Uloguj Se',
                logOut: 'Odjavi Se',
                findOut: 'Prijavi se kako bi saznao',
                inside: 'Šta je unutra? Najnoviji proizvodi, sniženja, inspiracija i još mnogo toga.',
                thanksForSigningUp: 'Hvala Vam što ste se prijavili. Od danas Vi ćete biti prvi koji će saznati sve.',
                welcome: 'Hvala Vam!',
                touch: 'Kontakt',
                service: 'Radno vrijeme',
                days: 'Ponedjeljak - Petak',
                hours: '09h : 18h'
            },
            signUp: {
                touch: 'Stupimo U Kontakt',
                mail: 'Mail',
                password: 'Lozinka',
                confirm: 'Potvrdi lozinku',
                accept: 'Prihvati uslove korišćenja',
                submit: 'Pošalji',
                subscribeHeading: "Pretplati se za najnovije vijesti",
                subscribeButton: "Pretplati se",
                resetPassword: "Email za resetovanje lozinke Vam je poslan. Molimo Vas da provjerite Vaš email!"
            },
            validations: {
                validEmail: 'Molim Vas napišite validnu email adresu.',
                required: 'Ovo polje je obavezno.',
                validPassword: 'Lozinka mora sadržati najmanje ',
                char: 'karaktera.',
                validConfirm: 'Vaše lozine nisu jednake.',
                validPhone: 'Možete unijeti smao brojeve.'
            },
            shippingDetails: {
                shippingInfo: 'Podaci za slanje pošiljke',
                firstName: 'Ime',
                lastName: 'Prezime',
                address: 'Adresa',
                city: 'Grad',
                country: 'Država',
                zip: 'Poštanski broj',
                phoneNumber: 'Broj telefona',
                serbia: 'Srbija',
                bosnia: 'Bosna i Hercegovina'
            },
            jewelryCare: {
                howToClean: 'KAKO ČISTITI NAKIT',
                howToStore: 'KAKO ODLAGATI NAKIT',
                cleaning: 'Čišćenje nakita - U mlaku vodu izlijte malu količinu blagog sapuna i koristite malu, meku četkicu za čišćenje vašeg nakita. Četkice za zube idealne su za čišćenje nakita sa zamršenim detaljima, koji inače može biti težak za čišćenje. Ako je prljavštinu teško ukloniti, namočite nakit u čistu vodu. Ako vam je srebrni nakit od sterlinga postao dosadan, krpa za poliranje srebra je sjajno sredstvo da ponovo zablista. Ipak, neće ukloniti ogrebotine.',
                store: 'Nakit treba čuvati dalje od direktne sunčeve svjetlosti i toplote, u zaštitnoj (podložnoj) kutiji za nakit ili u vrećici otpornoj na mrlje. Takođe se može čuvati u plastičnoj vrećici sa zatvaračem od polietilena. Nikada ne koristite polivinilne plastične vrećice, kao što su košuljice za smeće, jer sadrže sumporne smjese ili gumene posude koje će brže uzrokovati mrlje od srebra. Ne čuvajte svoj nakit u kupatilu ili na bilo kojim drugim vlažnim mjestima. Imajte na umu da naše PLEME kutije nisu napravljene za dugoročno skladištenje jer nisu nepropusne za zrak i oštećenja će se pojaviti s vremenom.'
            },
            shippingReturns: {
                shipping: 'Slanje porudžbina',
                shippingText: 'Sve porudžbine šaljemo iz Novog Sada u Srbiji. Cilj nam je da vašu narudžbu pošaljemo sljedeći radni dan nakon kupovine - Ovo isključuje vikende i državne praznike.',
                shippingOptions: 'Opcije slanja',
                option1: 'Standardna poštarina unutar Srbije (100-200 din. - zasvisno od težine paketa)',
                option2: 'Brza isporuka unutar Srbije (450-500 din. -zavisno od težine paketa)',
                option3: 'Brza isporuka unutar Bosne i Hercegovine (8 km)',
                delay: ' Imajte na umu da će vaša narudžba biti odložena zbog okolnosti koje nisu pod našom kontrolom. Ako vam je potrebna narudžba brzo, molimo odaberite ekspresnu dostavu pri odjavi.',
                delayImportant: '*Sa vremena na vrijeme narudžbe se mogu odgoditi u carini. To je izvan naše kontrole i dajemo sve od sebe da sve bude u redu.',
                returns: 'Povrat porudžbe i zamjena',
                returnText: 'Razumijemo da kupovina putem interneta ponekad može biti i škakljiva... Zato ćemo rado razmijeniti neiskorištene predmete za alternativnu veličinu i završiti u roku od 14 dana od kupovine. Napominjemo: Ne pružamo razmjenu / povrat sredstava za pirsirani nakit (minđuše) iz higijenskih razloga.',
                note: 'Molimo Vas da obratite pažnju na',
                note1: 'Zamijenićemo artikle samo ako ih imamo na zalihi, u suprotnom će se izdati prodajni kredit.',
                note2: 'Vraćeni predmeti moraju biti u orginalnom pakovanju i neoštećeni.',
                note3: 'Ne plaćamo poštarinu za povrat robe ka nama.',
                note4: 'Nažalost, nema povrata ili zamjene na prodajnim predmetima ili minđušama zbog zdravstvenih i sigurnosnih propisa.',
                note5: 'Za povrat neispravnih predmeta, iznos će vam biti vraćen u cijelosti, umanjen za sve troškove slanja.',
                note6: 'Pridržavamo pravo uskraćivanja nerazumnih popravaka, vraćanja i zamjene.'
            },
            headings: {
                ring1: 'PRSTENJE',
                ring2: 'Istraži naš univerzum prstenja. Izmiksaj, igraj se i zablistaj.',
                earring1: 'MINĐUŠE',
                earring2: 'Pogledaj najnovije proizvode. Istraži našu kolekciju minđuša.',
                necklace1: 'LANČIĆI',
                necklace2: 'Istraži naše nove stilove. Podigni svoju igru lančića.',
                other1: 'P.L.EM.E',
                other2: 'Nakit pronalazi svrhu.'
            },
            offers: {
                quality: 'Ručno izrađen nakit odličnog kvaliteta.',
                safe: 'Bezbjedno i sigurno slanje pošiljki.',
                delivery: 'Brza isporuka pošiljki.',
                shipping: 'Besplatna poštarina za narudžbu 3 ili više proizvoda.'
            }
        }
    }
})