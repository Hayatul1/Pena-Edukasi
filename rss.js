// Data untuk feed RSS
const feedData = {
    title: 'Judul Feed',
    link: 'https://example.com',
    description: 'Deskripsi Feed',
    items: [
        {
            title: 'Judul Item 1',
            link: 'https://example.com/item1',
            description: 'Deskripsi Item 1',
            pubDate: 'Fri, 13 Sep 2024 12:00:00 +0000',
            guid: 'https://example.com/item1'
        },
        {
            title: 'Judul Item 2',
            link: 'https://example.com/item2',
            description: 'Deskripsi Item 2',
            pubDate: 'Sat, 14 Sep 2024 12:00:00 +0000',
            guid: 'https://example.com/item2'
        }
    ]
};

// Fungsi untuk membuat XML RSS
function createRSSFeed(feedData) {
    const { title, link, description, items } = feedData;

    // Membuat elemen RSS
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">\n`;
    xml += `  <channel>\n`;
    xml += `    <title>${title}</title>\n`;
    xml += `    <link>${link}</link>\n`;
    xml += `    <description>${description}</description>\n`;
    xml += `    <pubDate>${new Date().toUTCString()}</pubDate>\n`;
    xml += `    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>\n`;

    // Menambahkan item ke channel
    items.forEach(item => {
        xml += `    <item>\n`;
        xml += `      <title>${item.title}</title>\n`;
        xml += `      <link>${item.link}</link>\n`;
        xml += `      <description>${item.description}</description>\n`;
        xml += `      <pubDate>${item.pubDate}</pubDate>\n`;
        xml += `      <guid>${item.guid}</guid>\n`;
        xml += `    </item>\n`;
    });

    xml += `  </channel>\n`;
    xml += `</rss>`;

    return xml;
}

// Mendapatkan RSS XML
const rssXML = createRSSFeed(feedData);

// Jika Anda ingin menampilkan RSS XML di konsol
console.log(rssXML);

// Anda bisa menggunakan XML ini di mana saja sesuai kebutuhan Anda
