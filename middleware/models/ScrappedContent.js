export function createScrappedContentSchema(mongoose) {
    const { Schema } = mongoose;

    const ScrappedContentSchema = new Schema({
        url: String,
        html: String,
        css: [Object]
    });

    if (mongoose.models && mongoose.models.scrappedContents) {
        console.log("1 Fired - ScrappedContent");
        return mongoose.models.scrappedContents;
    } else {
        console.log("2 Fired - ScrappedContents");
        return mongoose.model("scrappedContents", ScrappedContentSchema, 'scrappedContents');
    }
}
