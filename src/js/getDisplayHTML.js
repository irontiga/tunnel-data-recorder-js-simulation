function getDisplayHTML (total, ranges) {
    return `
        <h4>Total animals: <strong>${total}</strong></h4>
        <table>
            <tr>
                <th>Ranges of animals at trigger: </th>
            </tr>
            ${ranges.map(r => {
                return `
                    <tr>
                        <td>${r}</td>
                    </tr>
                `
            }).join('')}
        </table>
    `
}

export default getDisplayHTML