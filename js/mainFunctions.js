function paintElements(element, id) {
    switch(element) {
        case 'normal':
            id.style.backgroundColor = 'gray';
        break;
        case 'fire':
            id.style.backgroundColor = '#FA3937';
        break;
        case 'water':
            id.style.backgroundColor = '#4EDED4';
        break;
        case 'electric':
            id.style.backgroundColor = '#FAC249';
        break;
        case 'grass':
            id.style.backgroundColor = '#2FDE5B';
        break;
        case 'ice':
            id.style.backgroundColor = '#82D2F5';
        break;
        case 'fighting':
            id.style.backgroundColor = '#F54269';
        break;
        case 'poison':
            id.style.backgroundColor = '#A732FA';
        break;
        case 'ground':
            id.style.backgroundColor = '#F5621C';
        break;
        case 'flying':
            id.style.backgroundColor = '#B6BBDE';
        break;
        case 'psychic':
            id.style.backgroundColor = '#F552C2';
        break;
        case 'bug':
            id.style.backgroundColor = '#60F52B';
        break;
        case 'rock':
            id.style.backgroundColor = '#DEAE50';
        break;
        case 'ghost':
            id.style.backgroundColor = '#B285FA'
        break;
        case 'dragon':
            id.style.backgroundColor = '#3E83DE';
        break;
        case 'dark':
            id.style.backgroundColor = '#8946FA';
        break;
        case 'steel':
            id.style.backgroundColor = '#8089FA';
        break;
        case 'fairy':
            id.style.backgroundColor = '#E179F5';
        break;
        default:
            id.style.backgroundColor = 'transparent';
        break;
    }
}