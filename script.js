let fields = [
    null,
    'circle',
    'circle',
    'circle',
    null,
    null,
    'cross',
    'cross',
    null,
];

function init() {
    render();
}

function render() {
    let html = '<table>';

    for (let i = 0; i < 3; i++) {
        html += '<tr>';

        for (let j = 0; j < 3; j++) {
            const field = fields[i * 3 + j];
            let symbol = '';

            if (field === 'circle') {
                symbol = generateCircleSVG();
            } else if (field === 'cross') {
                symbol = generateCrossSVG();
            }

            html += `<td onclick="">${symbol}</td>`;
        }

        html += '</tr>';
    }

    html += '</table>';
    document.getElementById('content').innerHTML = html;
}

function generateCircleSVG() {
    const color = "#00B0EF";   // Farbe des Kreises
    const width = 75;          // Breite des SVGs
    const height = 75;         // Höhe des SVGs
    const duration = 0.25;
    
    const radius = (width / 2) - 5; // Berechnung des Radius basierend auf der SVG-Größe und der Linienbreite
    
    const svg = `
        <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
            <circle 
                cx="${width / 2}" 
                cy="${height / 2}" 
                r="0" 
                fill="${color}"
            >
                <animate 
                    attributeName="r" 
                    from="0" 
                    to="${radius}" 
                    dur="${duration}" 
                    fill="freeze" 
                    calcMode="spline" 
                    keySplines="0.42 0 0.58 1"
                />
            </circle>
        </svg>
    `;
    return svg;
}

function generateCrossSVG() {
    const color = "#FFC000";   // Farbe des Kreuzes
    const width = 75;          // Breite des SVGs
    const height = 75;         // Höhe des SVGs
    const duration = 0.25;     // Animationsdauer in Sekunden
    
    const svg = `
        <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
            <line x1="${width * 0.2}" y1="${height * 0.2}" x2="${width * 0.8}" y2="${height * 0.8}" 
                stroke="${color}" stroke-width="8" stroke-linecap="round">
                <animate 
                    attributeName="x2" 
                    from="${width * 0.5}" 
                    to="${width * 0.8}" 
                    dur="${duration}s" 
                    fill="freeze" 
                    calcMode="spline" 
                    keySplines="0.42 0 0.58 1"
                />
                <animate 
                    attributeName="y2" 
                    from="${height * 0.5}" 
                    to="${height * 0.8}" 
                    dur="${duration}s" 
                    fill="freeze" 
                    calcMode="spline" 
                    keySplines="0.42 0 0.58 1"
                />
                <animate 
                    attributeName="x1" 
                    from="${width * 0.5}" 
                    to="${width * 0.2}" 
                    dur="${duration}s" 
                    fill="freeze" 
                    calcMode="spline" 
                    keySplines="0.42 0 0.58 1"
                />
                <animate 
                    attributeName="y1" 
                    from="${height * 0.5}" 
                    to="${height * 0.2}" 
                    dur="${duration}s" 
                    fill="freeze" 
                    calcMode="spline" 
                    keySplines="0.42 0 0.58 1"
                />
            </line>
            <line x1="${width * 0.8}" y1="${height * 0.2}" x2="${width * 0.2}" y2="${height * 0.8}" 
                stroke="${color}" stroke-width="8" stroke-linecap="round">
                <animate 
                    attributeName="x2" 
                    from="${width * 0.5}" 
                    to="${width * 0.2}" 
                    dur="${duration}s" 
                    fill="freeze" 
                    calcMode="spline" 
                    keySplines="0.42 0 0.58 1"
                />
                <animate 
                    attributeName="y2" 
                    from="${height * 0.5}" 
                    to="${height * 0.8}" 
                    dur="${duration}s" 
                    fill="freeze" 
                    calcMode="spline" 
                    keySplines="0.42 0 0.58 1"
                />
                <animate 
                    attributeName="x1" 
                    from="${width * 0.5}" 
                    to="${width * 0.8}" 
                    dur="${duration}s" 
                    fill="freeze" 
                    calcMode="spline" 
                    keySplines="0.42 0 0.58 1"
                />
                <animate 
                    attributeName="y1" 
                    from="${height * 0.5}" 
                    to="${height * 0.2}" 
                    dur="${duration}s" 
                    fill="freeze" 
                    calcMode="spline" 
                    keySplines="0.42 0 0.58 1"
                />
            </line>
        </svg>
    `;
    return svg;
}