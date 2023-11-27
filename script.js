// TODO: форма вылезает, меню не вылезает

document.addEventListener('DOMContentLoaded', function() {
    const databases = ["PostgreSQL", "OracleBD", "MySQL", "SQLite"];
    const checkboxes = document.querySelectorAll('.filterCheckbox');
    const resultDiv = document.getElementById('result');

    function filterDatabases() {
        const checkedFilters = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.name);

        let filteredDatabases = databases.slice(); // Создаем копию изначального массива

        if (checkedFilters.includes('openSourceCheckbox')) {
            filteredDatabases = filteredDatabases.filter(db => ['PostgreSQL', 'MySQL', 'SQLite'].includes(db));
        }
        if (checkedFilters.includes('easyToInstallCheckbox')) {
            filteredDatabases = filteredDatabases.filter(db => ['PostgreSQL', 'MySQL', 'SQLite'].includes(db));
        }
        if (checkedFilters.includes('lightnessCheckbox')) {
            filteredDatabases = filteredDatabases.filter(db => db === 'SQLite');
        }
        if (checkedFilters.includes('performanceCheckbox')) {
            filteredDatabases = filteredDatabases.filter(db => ['PostgreSQL', 'OracleBD'].includes(db));
        }
        if (checkedFilters.includes('JSONCheckbox')) {
            filteredDatabases = filteredDatabases.filter(db => db === 'PostgreSQL');
        }

        displayResults(filteredDatabases);
    }

    function displayResults(databasesToShow) {
        resultDiv.innerHTML = '';
        if (databasesToShow.length === 0) {
            resultDiv.innerHTML = 'Баз данных по таким критериям нет';
        } else {
            const ul = document.createElement('ul');
            databasesToShow.forEach(db => {
                const li = document.createElement('li');
                li.textContent = db;
                ul.appendChild(li);
            });
            resultDiv.appendChild(ul);
        }
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterDatabases);
    });
    filterDatabases();
});
