MEOWPRINT – WEBOVÁ KALKULAČKA PRE CLOUDFLARE WORKERS

OBSAH BALÍKA
- public/index.html   Samotná kalkulačka (HTML + CSS + JS v jednom súbore)
- public/fonts/       Písma z meowprint.sk (Geist, Geist Mono, Space Grotesk, Instrument Serif)
- public/site.webmanifest + ikony   Aby sa dala pridať na plochu mobilu ako appka
- src/index.js        Worker obsluhujúci statické súbory
- wrangler.toml       Konfigurácia Cloudflare Workers + Assets
- package.json        Skripty a Wrangler vývojová závislosť

NAJRÝCHLEJŠIE NASADENIE CEZ WRANGLER
1. Rozbaľ ZIP do priečinka.
2. Nainštaluj Node.js, ak ho ešte nemáš.
3. Otvor terminál v priečinku meowprint_worker.
4. Spusti: npm install
5. Prihlás Cloudflare účet: npx wrangler login
6. Lokálny náhľad: npm run dev
7. Nasadenie: npm run deploy
8. Wrangler vypíše adresu Workeru na workers.dev.

PRIPOJENIE VLASTNEJ DOMÉNY
V Cloudflare Dashboard otvor Workers & Pages → calculator → Settings → Domains & Routes a pridaj doménu alebo subdoménu. DNS a doména musia byť v danom Cloudflare účte.

AKO SA KALKULAČKA POČÍTA
- Materiál = počet kusov × gramy na kus × €/kg / 1000.
- Čas tlače sa zadáva za 1 kus v minútach; celkový čas = čas 1 kusu × počet kusov.
- Elektrina = celkový čas tlače v hodinách × príkon v kW × cena kWh.
- Yield sa aplikuje len na materiál + elektrinu.
- Automatický násobok podľa množstva: 1–5 ks 3,0×; 6–20 ks 2,5×; 21–50 ks 2,2×; 51–100 ks 1,9×; 101+ ks 1,7×.
- Zaškrtnutie „Zložitá zákazka“ pridá k automatickému násobku +0,3×.
- Pri vypnutom automatickom násobku sa použije manuálne zadaná hodnota.
- Modelovanie + úpravy sa zadávajú v minútach a účtujú sa podľa hodinovky.
- Opotrebenie tlačiarne je automaticky 0,10 € za hodinu tlače.
- Balenie a dodatočná úprava ceny sa pripočítajú samostatne. Príplatok/zľava sa volí prepínačom, suma je vždy kladná.
- Modelovanie + úpravy aj celková cena sa zaokrúhľujú NAHOR na celé eurá (13,11 € → 14 €). Rozdiel ukazuje riadok „Zaokrúhlenie nahor“. Medzivýpočty sa zobrazujú v centoch.
- Desatinné čísla sa dajú písať s čiarkou aj bodkou. Prázdne povinné pole je chyba, nie nula.

PRIDANIE NA PLOCHU MOBILU
Otvor adresu kalkulačky v Safari/Chrome → Zdieľať / menu → Pridať na plochu. Rozpracované hodnoty sa ukladajú len v tomto prehliadači (localStorage), takže po zatvorení appky nezmiznú. Tlačidlo „Nová zákazka“ vymaže polia; predvolené ostanú len príkon 120 W, elektrina 0,20 €/kWh, yield 95 % a hodinovka 10 €/h.

EXPORT PRE ZÁKAZNÍKA
Tlačidlo „Export pre zákazníka · PDF“ otvorí dialóg tlače prehliadača. Vyber „Uložiť ako PDF“. Zákaznícky výstup zobrazuje dátum, počet kusov, celkový čas tlače, gramy filamentu, modelovanie + úpravy, balenie a príplatok/zľavu (nulové riadky sa skryjú), celkovú cenu a cenu za kus. Interné náklady a násobky sa zákazníkovi nezobrazujú.

SÚKROMIE
Výpočty prebiehajú v prehliadači. Kalkulačka neposiela vstupy ani zákazkové údaje na server a neukladá ich do databázy.

KONTROLNÝ PRÍKLAD
10 ks × 120 min/ks (= 20 h), 10,6 g/ks, 12 €/kg, 120 W, 0,20 €/kWh, yield 95 %, automatický násobok 2,5×:
materiál 1,272 € + elektrina 0,48 € = 1,752 € / 0,95 = 1,8442 € × 2,5 = 4,61 €, opotrebenie 20 h × 0,10 € = 2,00 €, spolu 6,61 € → zaokrúhlené nahor 7 €.
