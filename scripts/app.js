// Основное приложение
class FoivApp {
    constructor() {
        this.foivData = foivData;
        this.currentFilter = 'all';
        this.init();
    }
    
    init() {
        this.renderFoivs();
        this.setupEventListeners();
    }
    
    renderFoivs() {
        const container = document.getElementById('foiv-container');
        const filteredData = this.currentFilter === 'all' 
            ? this.foivData 
            : this.foivData.filter(foiv => foiv.sphere === this.currentFilter);
        
        container.innerHTML = filteredData.map(foiv => this.createFoivCard(foiv)).join('');
    }
    
    createFoivCard(foiv) {
        return `
            <div class="foiv-card" data-sphere="${foiv.sphere}">
                <div class="foiv-header">
                    <div class="foiv-name">
                        <a href="${foiv.link}" target="_blank">${foiv.name}</a>
                    </div>
                    <span class="foiv-sphere sphere-${foiv.sphere}">${foiv.sphereName}</span>
                </div>
                
                ${foiv.hasTerritorial ? `
                    <div class="territorial-organs">
                        <strong>Территориальные органы:</strong>
                        <ul class="organ-list">
                            ${foiv.territorialOrgans.map(organ => `
                                <li class="organ-item">
                                    <a href="${organ.link}" target="_blank" class="organ-link">
                                        ${organ.name}
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                ` : '<p>Территориальные органы отсутствуют</p>'}
            </div>
        `;
    }
    
    setupEventListeners() {
        // Фильтрация по сферам
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const sphere = e.target.dataset.sphere;
                
                // Обновляем активную кнопку
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                // Применяем фильтр
                this.currentFilter = sphere;
                this.renderFoivs();
            });
        });
    }
}

// Запускаем приложение когда страница загрузится
document.addEventListener('DOMContentLoaded', () => {
    new FoivApp();
});
