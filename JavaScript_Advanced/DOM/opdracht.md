Deel 1 - Elementen toevoegen aan de DOM

Je bent op safari en gaat The Big Five spotten. Het enige dier dat je tot nu toe hebt gespot is een eend.

Opdracht: Wanneer ik als gebruiker op een button van één van de Big 5 klik, wil ik dat die verschijnt in mijn lijstje met "animals spotted".

Todo list voor deze opdracht:

    Maak een event-listener vast aan de buttons
    Maak een functie die gecalled wordt op het moment dat er op 1 van de buttons wordt geklikt. Check dit met een console.log.
    Zorg dat het click event wordt doorgegeven aan deze functie.
    Zorg dat je toegang hebt tot de waarde (value) van de button waar op is geklikt in deze functie. Check dit met console.log. De uitkomst die je wilt zien in de console wanneer je klikt is: Leopard / Lion / Elephant / Rhino of Buffalo.
    Creëer een nieuw list-item met JavaScript met de bovenstaande waarde (namelijk het dier waar je op hebt geklikt.
    Selecteer het parent-element waar je dit nieuwe list-item aan vast wilt maken (de spotted animals list).
    Maak het nieuwe list-item vast aan het parent-element.

Deel 2 - 1 element verwijderen uit de DOM

Opdracht: Wanneer ik als gebruiker op de "remove the first item" knop klik wordt de eend die ik op mijn tocht naar het vliegveld heb gespot verwijderd (het is toch een beetje een vreemde eend in dit lijstje van de big five). De gebruiker kan op deze knop blijven klikken, telkens wordt het eerste item verwijderd.

Todo list:

    Maak een eventlistener vast aan de button
    Maak een functie vast aan de eventlistener
    In de functie: selecteer de eend (het element)
    selecteer ook de parent
    gebruik parent.removeChild(child).
    Alternatief: Verwijder het element met ChildNode.remove() 

Deel 3 - Meerdere element verwijderen uit de DOM

Opdracht: Wanneer ik als gebruiker op de "remove all spotted animals" knop klik worden alle dieren die ik heb gespot verwijderd.

Todolist:

    Maak een eventlistener vast aan de button
    Maak een functie vast aan de eventlistener
    In de functie: selecteer de parent
    Verwijder alle kinderen van de parent 
     De simpele manier: set de innerHTML van de parent naar een empty string 
     De chique manier: selecteer de parent en gebruik een loop om elk element 1 voor 1 te verwijderen met .remove() of met .removeChild()
