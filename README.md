# Chat Aplikacija

Ovo je osnovna aplikacija za chat koja omogućuje korisnicima komunikaciju u zajedničkoj prostoriji. Korisnici mogu unijeti svoje korisničko ime i odabrati boju koja ih predstavlja. Nakon što se pridruže prostoriji, mogu slati poruke koje se prikazuju svim ostalim korisnicima u prostoriji.

## Značajke

- Korisnik može unijeti svoje korisničko ime
- Korisnik može odabrati boju koja ga predstavlja
- Korisnik može slati poruke
- Poruke se prikazuju svim korisnicima u prostoriji

## Korištene tehnologije

Ova aplikacija je izgrađena pomoću:

- [React](https://reactjs.org/): JavaScript biblioteka za izgradnju korisničkih sučelja.
- [Scaledrone](https://www.scaledrone.com/): Usluga za real time razmjene poruka.

## Komponente

Aplikacija je strukturirana u četiri glavne komponente:

- `App.jsx`: Ovo je glavna komponenta. Obrađuje proces prijave korisnika i slanje poruka.
- `UserForm.jsx`: Ova komponenta prikazuje obrazac korisniku za unos korisničkog imena i odabir boje.
- `Input.jsx`: Ova komponenta pruža obrazac za slanje poruka.
- `Messages.jsx`: Ova komponenta obrađuje prikaz poruka.

## Pokretanje aplikacije

Da biste pokrenuli ovu aplikaciju, morate imati instaliran Node.js i npm na svom računalu. Upute su sljedeće:

1. Klonirajte ovaj repozitorij
2. Instalirajte potrebne ovisnosti koristeći `npm install`
3. Pokrenite aplikaciju koristeći `npm start`
4. Otvorite svoj preglednik i otvorite adresu `localhost:3000`

Napomena: Također ćete morati pružiti vlastiti Scaledrone ID kanala u datoteci `App.jsx`.