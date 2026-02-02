document.addEventListener('DOMContentLoaded', () => {
    const aiServices = [
        {
            name: 'Service A',
            description: 'This is a description for service A.',
            url: 'https://example.com/a'
        },
        {
            name: 'Service B',
            description: 'This is a description for service B.',
            url: 'https://example.com/b'
        },
        {
            name: 'Service C',
            description: 'This is a description for service C.',
            url: 'https://example.com/c'
        },
        {
            name: 'Service D',
            description: 'This is a description for service D.',
            url: 'https://example.com/d'
        },
        {
            name: 'Service E',
            description: 'This is a description for service E.',
            url: 'https://example.com/e'
        },
        {
            name: 'Service F',
            description: 'This is a description for service F.',
            url: 'https://example.com/f'
        }
    ];

    const aiGrid = document.getElementById('ai-grid');
    aiGrid.innerHTML = ''; // Clear the "A", "B", "C" etc. cards

    aiServices.forEach(service => {
        const card = document.createElement('div');
        card.classList.add('ai-card');

        card.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <a href="${service.url}" target="_blank" class="play-btn">Play</a>
        `;

        aiGrid.appendChild(card);
    });
});
