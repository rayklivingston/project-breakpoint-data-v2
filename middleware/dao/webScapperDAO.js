export async function addScrappedData(scrappedData, db) {
    const ScrappedContent = db.scrappedContents;

    const scrappedContent = new ScrappedContent({ ...scrappedData });

    const newScrappedContent = await scrappedContent.save();

    return newScrappedContent.toObject();
}