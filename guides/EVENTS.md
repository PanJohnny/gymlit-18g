# Jak upravit události
## O souboru
Události jsou markdown soubor leřící v `/src/pages/events`

Každá událost je [markdown soubor (syntax: https://www.markdownguide.org/basic-syntax/)](https://www.markdownguide.org/basic-syntax/)

Na začátku souboru je místo obehnané `---` které neupravujte, ale udává základní proměnné pro webovou stránku. Hlava tedy vypadá nějak takhle:
``` 
---
template: ../../layouts/Events.astro
class: x. G
---
```

V těle souboru se zapisují událost.

## Jak zapsat událost

Každá událost se zapíše jako:
```md 
### Datum
Událost 1

Událost 2
```

Pod jedním datem může být mnoho událostí pokud je datum v jiném kalendářním roce než předchozí přidejte mezi něco:

```md
## rok
---
```

Po dokončení úprav: doscrolujete dolů a klknete na tlačítko commit.

#### Příklady
Jedna událost
```md
### 1.10.
Byli jsme na výletě v ZOO 
```

Více událostí v jeden den
```md
### 1. 1.
Šli jsme zpět do školy

Budeme mít nového učitele na biologii
```

Ukázka dohromady
```md
## 2019
---
### 1.10.
Byli jsme na výletě v ZOO 

## 2020
---
### 1. 1.
Šli jsme zpět do školy

Budeme mít nového učitele na biologii
```

## Pokročilé formátování
[Klikněte zde pro otevření stránky o formátování (https://www.markdownguide.org/basic-syntax/)](https://www.markdownguide.org/basic-syntax/)

### Ve zkratce

*italic* `*italic*`

**bold**: `**bold**`

***italic and bold***: `***italic and bold***`

Hvězdičky se dají nahradit podtržítkama.

___all___: `___all___`

[odkaz](#): `[odkaz](url)`

![kočička](https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930_960_720.jpg): `![popis obrázku](url)`

`kód`: ``` `kód` ```

Vše se dá kombinovat
