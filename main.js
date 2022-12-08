function premierMot () {
    let phrase = prompt('Entrez une phrase');

    let mot = phrase.split(/[-_' '.]+/);
    let result = mot[0];
    return alert('Le premier mot est ' + result);
}