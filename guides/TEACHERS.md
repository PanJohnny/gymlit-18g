# Jak upravit učitele
Na adrese [https://gymlit-18g.vercel.app/editor/teacher](https://gymlit-18g.vercel.app/editor/teacher) zadáte jméno učitele a ono vám to vygeneruje zápis. Následně otevřete /public/teachers.json a přidáte vygenerovaný zápis.

Soubor by měl vypadat takhle:
```json
{
    "petp": "Petr Plachý"
}
```

Zápis by měl vypadat nějak takhle:
```json
"svap": "Svatoslav Procházka"
```

Za poslední zápis (v ukázce petp) přidáte na konec řádky čárku a na další lajně pastenete zápis. Následně doscrolujete dolů a klknete na tlačítko commit.

1.
```json
{
    "petp": "Petr Plachý", <- Přidát čárku
}
```

2.
```json
{
    "petp": "Petr Plachý",
    "svap": "Svatoslav Procházka" <- CTR + V
}
```

(<- v ukázce nedávejte do souborů)