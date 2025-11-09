function renderEvents() {
    return `
        <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem;">Upcoming Events</h2>
        
        ${DEMO_DATA.events.map(event => `
            <div class="card event-card" onclick="viewEventDetail(${event.id})">
                <div class="event-date">
                    <div class="event-date-day">${event.day}</div>
                    <div class="event-date-month">${event.month}</div>
                </div>
                <div class="event-content">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                    ${event.details && event.details.participants !== undefined ? `<p style=\"margin-top: 0.5rem; font-weight: 600; color: var(--primary);\">${event.details.participants} registered</p>` : ''}
                </div>
            </div>
        `).join('')}
    `;
}