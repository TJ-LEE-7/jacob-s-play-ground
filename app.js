const categoryUrls = {
    'game': 'https://www.nvidia.com/en-us/geforce/ace/',
    'doc': 'https://www.notion.so/product/ai',
    'tool': 'https://github.com/features/copilot'
};

function filterAI(category) {
    if (categoryUrls[category]) {
        window.location.href = categoryUrls[category];
    } else if (category === 'all') {
        // Optional: handle the "all" case, e.g., by scrolling to the grid
        document.getElementById('ai-grid').scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const aiServices = [
        {
            name: 'ChatGPT',
            description: 'A powerful language model by OpenAI.',
            url: 'https://chat.openai.com'
        },
        {
            name: 'Google Gemini',
            description: 'A family of multimodal AI models by Google.',
            url: 'https://gemini.google.com'
        },
        {
            name: 'Midjourney',
            description: 'An independent research lab that produces an artificial intelligence program that creates images from textual descriptions.',
            url: 'https://www.midjourney.com'
        },
        {
            name: 'DALL-E 3',
            description: 'An AI system by OpenAI that can create realistic images and art from a description in natural language.',
            url: 'https://openai.com/dall-e-3'
        },
        {
            name: 'GitHub Copilot',
            description: 'Your AI pair programmer.',
            url: 'https://github.com/features/copilot'
        },
        {
            name: 'Notion AI',
            description: 'Write faster, think bigger, and augment creativity. Right inside Notion.',
            url: 'https://www.notion.so/product/ai'
        }
    ];

    const aiGrid = document.getElementById('ai-grid');
    if (aiGrid) {
        aiGrid.innerHTML = ''; // Clear existing content

        aiServices.forEach(service => {
            const card = document.createElement('div');
            card.classList.add('ai-card');
            
            const thumbnailUrl = `https://api.mshots.io/v1/screenshot?url=${service.url}`;

            card.innerHTML = `
                <div class="thumbnail">
                    <img src="${thumbnailUrl}" alt="${service.name} screenshot">
                </div>
                <div class="card-content">
                    <h3>${service.name}</h3>
                    <p>${service.description}</p>
                    <a href="${service.url}" target="_blank" class="play-btn">Play</a>
                </div>
            `;

            aiGrid.appendChild(card);
        });
    }
});